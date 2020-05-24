/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  console.log(`====`, baseUrl)

  const supportLinks = [
    {
      content: `yuanhua118`,
      image: '../../docs/img/gzh.jpg',
      imageAlign: "top",
      // title: '公众号',
    },
    {
      content: '[GitHub](https://github.com/yuanhua118/)',
      imageAlign: "top",
      image: '../../docs/img/github.png',
      imageLink: "https://github.com/yuanhua118"
      // title: 'GitHub',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h2>猿话实验室</h2>
          </header>
          <p>猿话实验室，是一个年轻创新的技术团队。致力于构建沉淀、学习、分享包括但不限于前端开发、原生APP开发等专业方面的知识及案例。</p>
          <header className="postHeader">
            <h2>联系小猿</h2>
          </header>
          <GridBlock contents={supportLinks} align='center' layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
