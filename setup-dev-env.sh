#!/bin/bash

if [ -z "`which npm`" ]
then
	echo "ERROR: npm is missing!"
	echo "Please install nodejs and npm from http://nodejs.org"
	exit 1;
fi


if [ -z "`which grunt`" ]
then
	echo "ERROR: grunt-cli is missing!"
	echo "Please run 'sudo npm install -g grunt-cli'"
	exit 1;
fi
if [ -z "`which bower`" ]
then
	echo "ERROR: bower is missing!"
	echo "Please run 'sudo npm install -g bower'"
	exit 1;
fi




if [ -z "`scss-lint --version 2>/dev/null`" ]
then
	echo "ERROR: scss-lint is missing"
	echo "Please run 'sudo gem install scss-lint'"
	exit 1
fi

npm install

bower install --config.interactive=false # since we don't want to know if we might want to submit some statistics to the bower team!

