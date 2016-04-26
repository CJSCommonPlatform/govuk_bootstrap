#!/bin/bash
set -ev
# BRANCH_NAME=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)


if [ "$TRAVIS_TAG" != "" ]; then

  cd docs/app
  git init

  # inside this git repo create Travis user
  git config user.name "Travis CI"
  git config user.email "james@jamesbirrellgray.com"

  # The first and only commit to this new Git repo contains all the
  # files present with the commit message "Deploy to GitHub Pages".
  git add .
  git commit -m "Deploy to GitHub Pages"

  # Force push from the current repo's master branch to the remote
  # repo's gh-pages branch. (All previous history on the gh-pages branch
  # will be lost, since we are overwriting it.) We redirect any output to
  # /dev/null to hide any sensitive credential data that might otherwise be exposed.


  #git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
  #pushing has been disabled due to issues with GH_TOKEN
  #in the meanwhile, push manually via <yourusername>@github.com/CJSCommonPlatform/govuk_bootstrap.git
  #
fi


# GH_TOKEN=nS5UgO*NUR03 GH_REF=github.com/CJSCommonPlatform/govuk_bootstrap.git ./deploy.sh
# git push --force --quiet "https://vygis@github.com/CJSCommonPlatform/govuk_bootstrap.git" master:gh-pages > /dev/null 2>&1
