ifeq ($(shell command -v podman 2> /dev/null),)
    CMD=docker
else
    CMD=podman
endif

.PHONY: css
css:
	$(CMD) build -t daisy .
	$(CMD) run --name builder daisy
	$(CMD) cp builder:/tmp/output.css assets/output.css
	$(CMD) rm builder
