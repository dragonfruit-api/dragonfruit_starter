#!/bin/sh
HOMEDIR=$(pwd)

echo "\033[2J"
echo "\033[31;1mH!\033[0m Before you get started, we're going to check to see if you have everything installed on your computer that you'll need to run DragonFruit."
echo "\n\n"
sleep 1

printf "Checking for \033[31;1mHomebrew\033[0m... "

if hash brew 2>/dev/null;
then
	printf "\033[32mOK\033[0m\n"
else 
	printf "\033[31;1mMISSING\033[0m\n"
	echo "It looks like you don't have Homebrew installed. Please go to \033[1;4mhttp://brew.sh\033[0m and follow the instructions there."
	exit 1
fi
printf "Checking for \033[31;1mNode.js\033[0m... "

# node
if hash node 2>/dev/null;
then
	printf "\033[32mOK\033[0m\n"
else 
	printf "\033[31;1mMISSING\033[0m\n"
	echo "It looks like you don't have Node.js installed. We can install it for you if you'd like."
	echo "\033[31;1mHit Y to install Node.js or [enter] to quit.\033[0m"
	read -s NODE
	NODE=${NODE:-S}
	shopt -s nocasematch
	if [[ $NODE == "Y" ]];
	then
		echo "\033[33;1mInstalling Node.js.\033[0m"
		brew install node
	else
		exit 1
	fi
fi

echo 
echo "OK, now we will install DragonFruit"
echo "\n\n"
echo "\033[31;1mWe'll start by uninstalling any old versions of DragonFruit you might have.\033[0m."
brew uninstall dragonfruit

# set up dragonfruit
cd "homebrew"
brew install "dragonfruit.rb"

cd $HOMEDIR


echo
echo "\033[33;1mYou're all done!\033[33;1m"
# echo
# echo "\033[31;1mHit S to stop or [enter] to continue.\033[0m"
# read UPTODATE
# UPTODATE=${UPTODATE:-Y}
# if [ $UPTODATE -= "S" ];
# then 
# 	exit
# fi
# echo "\n\n"
# echo "Ok, cool! \033[1mWe're going to check to see if \033[0m?"
# echo "If you haven't, we recommend you do."
# echo "\033[31;1mHit Y to install Building Blocks (any other key to skip).\033[0m"
# read TOOLS
# TOOLS=${TOOLS:-N}
# if [ $TOOLS == "Y" ];
# then 
# 	cd $TDIR
# 	git clone "https://github.com/ideo/building-blocks.git"
# 	cd "building-blocks"
# 	echo "\n\n"
# 	./ideo-setup.sh
# 	cd $HOMEDIR
# 	echo "\033[35;1mOk...that part is all done.\033[0m"
# fi

# set up dragonfruit
# echo "\n\n"
# echo "Next, we'll install \033[31;1mDragonfruit\033[0m."
# cd $TDIR
# git clone "https://github.com/ideo/homebrew.git"
# cd "homebrew/dragonfruit"
# brew install "dragonfruit.rb"
# cd $HOMEDIR

# set up the dragonfruit databases
# echo "\n\n"
# echo "All done! \033[35;1mNext, we'll load the data into the database\033[0m."

# dragonfruit -conf=dragonfruit.conf -file=sample_data/resource.json -type=vendor -serve=true&
# sleep 3s

# brew install phantomjs

# cd $HOMEDIR/data

# python add_vendors.py

# cd $HOMEDIR
# echo "\n\n"
# echo "\033[35;1mOk one more step. We'll set up the libraries to run the site on your machine.\033[0m."

# npm install
# bower install
# grunt build

# echo "\033[1mCleaning up some stuff... Just a moment.\033[0m"
# rm -rf $TDIR