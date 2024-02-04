## 这是一个，个人网站。
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

文章标题字体样式
```
    font-weight: 700;
    font-size: 22px;
    line-height: 1.4;
    color:#151515;
    <font color="#666" size="3" face="华文彩云">
```

内容字体样式
```
    color: #666;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.7;
```