# Mini-Lemon 知识问答系统
***
##　网站搭建

* 客户端: 结构Bootstrap(>=3.3.0 非alpha版本) 效果jQuery(>=3.0) 交互Ajax,socket(>=1.7.0)
* 服务器端: Node.js(express框架) mongoose
* 数据库: mongodb

## Database(数据库)
> base

## Collections(集合)
###  base
>* users(用户)

| 中文 | 英文 | 类型 | 是否必填 | 默认值 | 备注 | 
|------|------|------|-------|------|------|
| 记录ID | _id | ObjectId | 是 |  | 数据库自动生成 | 
| 账号 | uid | String | 是 |  | 唯一，邮箱或者手机号 |
| 密码 | password | String | 是 |  |  | 
| 被点赞数 | likes | Number | 否 | 0 |  |
| 被关注数 | focus | Number | 否 | 0 |  | 
| 关注列表 | focuslist | Array | 否 | [] | 关注用户的_id |
| 活跃度数 | actives | Number | 否 | 0 |  |
| 被举报次数 | bads | Number | 否 | 0 |  |
| 关注的问题 | issuesf | Array | 否 | [] | 问题的_id | 
| 收藏的问题 | issuesc | Array | 否 | [] | 问题的_id |
| 回答过的问题 | issuesr | Array | 否 | [] | 问题的_id |
| 个人信息 | info | Object | 否 | {} |  | 
| 参与社区互动 | bbs | Object | 否 | {} | 如:{php:3} |
| 创建时间 | ctime | Date | 是 |  | 在注册成功时写入 |
| 最近登录时间 | ltime | Date | 是 |  | 在登录成功时写入 |
| 是否已经激活 | isactive | Boolean | 否 | false |  |
  
>* issues(问题)

| 中文 | 英文 | 类型 | 是否必填 | 默认值 | 备注 | 
|------|------|------|-------|------|------|
| 记录ID | _id | ObjectId | 是 |  | 数据库自动生成 | 
| 标题 | title | String | 是 |  |  |
| 内容 | content | String | 是 |  |  |
| 问题标签 | tags | Array | 是 | [] |  |
| 发布人 | puber | Array | 是 | [] | 存入发布人_id nick |
| 发布时间 | ctime | Date | 是 |  |  |
| 最近回答用户 | ansuser | Array | 否 | [] | 最近回答用户_id nick |
| 最近回答时间 | anstime | Date | 是 |  | 最近的回答时间 |
| 最近操作时间 | ltime | Date | 是 |  | 最近的操作时间 |
| 投票数 | votes | Number | 否 | 0 |  |
| 回答数 | answers | Number | 否 | 0 |  |
| 浏览数 | scans | Number | 否 | 0 |  |
| 关注数 | focus | Number | 否 | 0 |  |
| 收藏数 | collects | Number | 否 | 0 |  |
| 是否解决 | issolve | Boolean | 否 | false |  |
| 举报次数 | reports | Number | 否 | 0 |  |
| 要求被关闭的次数 | closes | Number | 否 | 0 |  |

>* answers(回答)

| 中文 | 英文 | 类型 | 是否必填 | 默认值 | 备注 | 
|------|------|------|-------|------|------|
| 记录ID | _id | ObjectId | 是 |  | 数据库自动生成 | 
| 问题ID | issuesid | String | 是 |  |  |
| 回答内容 | content | String | 是 |  |  |
| 回答时间 | ctime | Date | 是 |  |  |
| 回答用户 | ansuser | Array | 是 | [] | 用户_id nick |
| 被评论数 | comments | Number | 否 | 0 |  |
| 有价值数 | likes | Number | 否 | 0 |  |
| 无价值数 | unlikes | Number | 否 | 0 |  |
| 是否被采纳 | isaccept | Boolean | 否 | false |  |

>* comments(评论)

| 中文 | 英文 | 类型 | 是否必填 | 默认值 | 备注 | 
|------|------|------|-------|------|------|
| 记录ID | _id | ObjectId | 是 |  | 数据库自动生成 | 
| 回答ID | answerid | String | 是 |  |  |
| 评论人 | comuser | Array | 是 | [] | _id nick |
| 评论内容 | content | String | 是 |  |  |
| 评论的时间 | ctime | Date | 是 |  |  |

***
## Pages(页面)

### 前台

>* index(首页)

    专题标签选择
    最新问答:问题或者回答的时间排序
    热门问答:24小时内的问答
    等待问答:回答数为0的问答
    用户排行榜:活跃声望
    
>* login(登录)

    登录功能:用户账号+密码
    
>* sign(注册)

    注册功能:用户账号(唯一)+密码(2次)
    
>* tag(专题)

    当前专题下的问答:不同的排序方式
    专题介绍
    专题活跃用户
    相关的专题

>* detail(详情)

    问题:标题，描述，发布人，发布时间，标签，最近的操作时间，浏览数，关注数，收藏数，是否解决
    回答:回答内容，回答人，回答时间，回答人的声望，回答的价值数，是否被采纳
    回答框
    相似问题列表

>* publish(问题发布)

    发布问题:标题，内容，专题
    搜索问题:问题标题描述

>* search(搜索展示页)

    展示搜索结果:标题，发布人，时间，是否解决等

>* info(个人主页)

    用户的基本信息:昵称，账号，性别，公司，大学，声望，描述性的文本，胸章，主页被浏览的次数，社区属性
    问答相关的信息:我的提问，我的回答，我的评论，我的私信

>* 404(未找到资源)

    未找到本网站的相关资源的时候展示:网站logo，相关提示信息，返回首页按钮

>* about(关于)

    网站建立的时间，目标理想，团队，期望，建议邮箱。

>* suggest(建议)

    建议的内容

### 后台

>* user(用户信息)

      用户基本信息管理，发送相关胸章，定期删除死用户

>* issues(提问信息)

      定期审核问题的合法性，相关性等
      
>* answer(回复) 

      审核回复的合法性和相关性      

>* settting(网站设置)

      网站的基本设置
