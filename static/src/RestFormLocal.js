import { RestForm, AppEvents } from 'react-at-rest';
import _ from 'lodash';
import { v4 } from 'uuid';


class RestFormLocal extends RestForm {
  saveModel(validate = true) {
    if (this.state.busy === true) {
      return;
    }


    const model = this.getUpdatedModel();

    let errors = false;
    if (validate) {
      errors = this.validateModel(model);
    }
    if (errors) {
      return;
    }

    let deferred;
    if (typeof model.id !== 'undefined') {
      if (_.isEmpty(this.state.patch)) {
        this.props.onSuccess();
        return;
      }
      deferred = this.props.store.updateResource(
        model.id,
        _.omit(this.state.patch, this.props.omitAttributes),
        this.props.options);
    } else {
      const opts = {
        parentResourceId: this.props.parentResourceId,
        parentResourcesKey: this.props.parentResourcesKey,
      };
      if (typeof this.props.options !== 'undefined') {
        opts.query = this.props.options.query;
      }
      model.id = v4();
      deferred = this.props.store.createResource(
        _.omit(model, this.omitAttributes),
        opts);
    }

    this.setState({ busy: true });

    deferred
      .then(
        (data) => {
          this.setState({ busy: false });
          AppEvents.trigger('form.error', {});
          this.props.onSuccess(data);
        },
      )
      .catch(this.handleErrors);
  }
}

export default RestFormLocal;
