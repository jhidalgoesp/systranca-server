# SysTranca Server Project

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.com/esron/systranca-server.svg?branch=master)](https://travis-ci.com/esron/systranca-server)

This project was born when I came too early at my work building. We are a small startup on Vale do São Francisco, Brazil.

The objective of this project is provide an API with authentication and authorization for users to login into a home automation server that can, for now, open a eletronic lock.

# Instructions

This project uses [MongoDB](https://www.mongodb.com/) as database through the [Mongoose](https://mongoosejs.com/) library.

Install the dependencies:

```bash
npm install
```

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Update the variables to correspond your environment.

Generate the RSA keys:

```bash
npm run key:generate
```

or

```bash
node keys.js
```

Create the super user

```
node initDatabase.js
```

This project doesn't have a front-end, yet.
