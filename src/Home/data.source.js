import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper jzih1dpqqrg-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo jzjgnya1gmn-editor_css',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-J8NSLj9rbsAAAAAAAAAAABkARQnAQ',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: <p>帮助中心</p>, name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper l8nun67oiy6-editor_css',
    children: [
      {
        name: 'title',
        children: <p>某某家具租赁</p>,
        className: 'banner5-title',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: <p>承接各类家具租赁/优质的服务/满意的价格</p>,
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <p>
            各种家具租赁，桌椅租赁，沙发租赁，沙发凳租赁，遮阳伞租赁，茶几租赁，会展家具租赁，活动庆典桌椅租赁，吧桌吧椅租赁，办公家具租赁，婚庆家具租赁，宴会桌椅租赁，户外家具租赁，贵宾沙发，贵宾椅租赁，用于国家政府大型活动，事业单位办公桌椅，接待国家贵宾领导座谈家具租赁，高端重要会议家具租赁，品牌推广，走秀活动使用的物品，品质新，品种全，应有尽有，快快联系我们吧！
          </p>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: '#footer1',
          className: 'banner5-button l8nuy61plnm-editor_css',
          type: 'primary',
          children: <span>联系我们</span>,
        },
      },
    ],
  },
  image: {
    className: 'banner5-image l8num67jhap-editor_css',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
};
export const Feature60DataSource = {
  wrapper: { className: 'home-page-wrapper feature6-wrapper' },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: { className: 'feature6-title-text', children: '服务指标' },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万' },
              toText: true,
              children: '116',
            },
            children: {
              className: 'feature6-text',
              children: <span>大型会展服务次数</span>,
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '1.17',
            },
            children: {
              className: 'feature6-text',
              children: <span>酒桌宴席服务次数</span>,
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '2.10',
            },
            children: {
              className: 'feature6-text',
              children: <span>会议办公服务次数</span>,
            },
          },
        ],
      },
      {
        title: {
          className: 'feature6-title-text',
          children: <span>服务行业</span>,
        },
        className: 'feature6-item',
        name: 'block1',
        children: [
          {
            md: 8,
            xs: 24,
            name: 'child0',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万' },
              toText: true,
              children: '5.65',
            },
            children: {
              className: 'feature6-text',
              children: <span>金融办公类</span>,
            },
          },
          {
            md: 8,
            xs: 24,
            name: 'child1',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '3.18',
            },
            children: {
              className: 'feature6-text',
              children: <span>科技展览类</span>,
            },
          },
          {
            md: 8,
            xs: 24,
            name: 'child2',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '1.82',
            },
            children: {
              className: 'feature6-text',
              children: <span>户外宴席类</span>,
            },
          },
        ],
      },
    ],
  },
};
export const Feature70DataSource = {
  wrapper: { className: 'home-page-wrapper feature7-wrapper' },
  page: { className: 'home-page feature7' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature7-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature7-title-h1',
        children: <span>租赁服务类型</span>,
      },
      {
        name: 'content',
        className: 'feature7-title-content',
        children: <span>多达100+种租赁家具任你挑</span>,
      },
    ],
  },
  blockWrapper: {
    className: 'feature7-block-wrapper',
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        name: 'block0',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: <span>桌椅租赁类</span>,
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <p>
                  课桌椅、宴会桌椅、培训桌椅、洽谈桌椅、会议桌椅、酒吧桌椅、户外折叠桌椅、写字桌、古典桌椅等
                </p>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block1',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: <span>沙发茶几租赁类</span>,
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <p>
                  单人沙发、双人沙发、沙发凳子、沙发转桌、高端沙发、转角沙发、茶几、多人沙发等
                </p>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block2',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: <span>办公家具租赁类</span>,
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <p>
                  文件柜、前台桌、保险柜、活动柜、铁皮柜、储物柜、员工位、老板台等
                </p>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block3',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: <span>综合展会用品类</span>,
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <p>
                  折叠屏风、挂衣架、穿衣镜、演讲台、遮阳伞、隔离带、户外休息床、帐篷等
                </p>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block4',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: <span>氛围器具类</span>,
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <p>
                  LED小彩灯、宴会照明灯、发光吧台、KTV节奏灯、展会舞台灯、蹦迪闪光灯、闪光魔法棒等
                </p>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block5',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: <span>常用租赁类型</span>,
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: (
                <p>
                  宴会桌椅、培训桌椅、会议桌椅、各类沙发、老板台、折叠屏风、遮阳伞、帐篷、LED小彩灯、舞台灯
                </p>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block6',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: <span>其他类型</span>,
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: <p>指示牌、广告牌、桌布桌裙、垃圾桶、铁马栏杆等</p>,
            },
          ],
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: <span>租赁服务方案</span>,
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item jzjgrrupf2c-editor_css',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjgrlz134-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'content0-block-title jzj8xt5kgv7-editor_css',
              children: '一站式业务接入',
            },
            {
              name: 'content',
              children: (
                <p>
                  沟通您的需求，为您推荐全套式家具搭配方案，省时省力，效率翻倍
                </p>
              ),
              className: 'jzj8z9sya9-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjncn210ql-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'content0-block-title jzjne54fwqm-editor_css',
              children: <span>风险监控</span>,
            },
            {
              name: 'content',
              children: (
                <p>
                  在所有需求配置环节事前，全面勘查目标场地和环境影响，拥有风险控制和质量控制能力
                </p>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjndq0dueg-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'content0-block-title jzjne24af8c-editor_css',
              children: <span>工作实施效率</span>,
            },
            {
              name: 'content',
              children: (
                <p>
                  沉淀租赁接入效率和实施工作效率数据，充分利用经验提供实施效率
                </p>
              ),
            },
          ],
        },
      },
      {
        name: 'block~jzjn87bmyc7',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjndsyw8sf-editor_css',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ',
            },
            {
              name: 'title',
              className: 'content0-block-title jzjndw5oerk-editor_css',
              children: <span>服务精神</span>,
            },
            {
              name: 'content',
              children: (
                <p>
                  积极处理工作期间问题，稳定工作顺利进行。妥善结束工作，回收场地器具。闭环工作流程
                </p>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature80DataSource = {
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  page: { className: 'home-page feature8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature8-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature8-title-h1',
        children: <span>租赁流程</span>,
      },
      {
        name: 'content',
        className: 'feature8-title-content',
        children: '流程简单清晰，快速响应需求',
      },
    ],
  },
  childWrapper: {
    className: 'feature8-button-wrapper',
    children: [
      {
        name: 'button',
        className: 'feature8-button',
        children: {
          href: '#footer1',
          children: '立即租赁',
        },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: 'feature8-carousel',
    wrapper: { className: 'feature8-block-wrapper' },
    children: {
      className: 'feature8-block',
      titleWrapper: {
        className: 'feature8-carousel-title-wrapper',
        title: { className: 'feature8-carousel-title' },
      },
      children: [
        {
          name: 'block0',
          className: 'feature8-block-row',
          gutter: 120,
          title: {
            className: 'feature8-carousel-title-block',
            children: '平台自主训练流程',
          },
          children: [
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: '需求沟通',
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <p>
                        添加下方客服微信，沟通业务租赁需求，选择租赁类型和数量
                      </p>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: '定制方案',
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <p>
                        租赁公司对接人与您一起确定
                        家具配置方案，以及该方案的报价
                      </p>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: '勘查与设计',
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <p>租赁公司安排工作人员勘查目标场地，布置家具安放方案</p>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: '合同与实施',
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <p>
                        双方签订合同。
                        <br />
                        客户支付定金及租金，家具租赁公司人员配送家具，实施安放工作
                      </p>
                    ),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};

export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>成功案例</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: '广州酒家户外拓展场地布置' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'BYD' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: '广州酒家户外拓展场地布置' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: '华为手机新品发布会展' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: '广州酒家户外拓展场地布置' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: '华为手机新品发布会展' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: '广州酒家户外拓展场地布置' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: '华为手机新品发布会展' },
        },
      },
    ],
  },
};

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', id: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 8,
        className: 'block',
        title: {
          className: 'logo jzl0qcpyjra-editor_css',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*GzZ-QqkpH4AAAAAAAAAAAABkARQnAQ',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: <span>某某某租赁公司</span>,
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 8,
        className: 'block',
        title: { children: '联系我们' },
        childWrapper: {
          children: [
            {
              name: 'image~jzl0tcm4f1d',
              className: '',
              children: (
                <img
                  src={require('./images/qrcode.jpeg')}
                  width="160px"
                  alt="img"
                />
              ),
            },
            {
              href: '#',
              name: 'link0',
              children: <p>微信扫描二维码添加客服微信</p>,
              className: 'jzl0u1bko6-editor_css',
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 8,
        className: 'block',
        title: {
          children: '合作伙伴',
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: '某某灯具公司',
            },
            {
              href: '#',
              name: 'link1',
              children: '某某户外公司',
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: <p>Copyright © 2022 某某租赁公司</p>,
  },
};
