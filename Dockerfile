FROM node:23-slim AS builder
ADD . .
RUN npm --prefix .build i -D daisyui@4.12.14
RUN npm --prefix .build i -D @tailwindcss/typography
RUN cd .build && npx postcss tailwind.css -o /tmp/output.css
