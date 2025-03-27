FROM node:23-slim AS builder
ADD . .
RUN npm --prefix .build i -D daisyui@5
RUN npm --prefix .build i -D @tailwindcss/typography
RUN cd .build && npx @tailwindcss/cli -i tailwind.css -o /tmp/output.css
