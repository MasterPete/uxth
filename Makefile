build:
	yarn build && git add --all && git commit -m "🚀 Build site" && git push origin $(git_current_branch)
