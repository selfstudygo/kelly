(this.webpackJsonptheblog=this.webpackJsonptheblog||[]).push([[5],{340:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(325),l=n.n(o),s=n(341),i=function(e){var t=e.code,n=e.lang||"javascript",a=l.a.highlight(t,l.a.languages[n],n);return r.a.createElement("pre",null,r.a.createElement("code",{spellCheck:"false",dangerouslySetInnerHTML:{__html:a.replace(/^\n/,"")}}),r.a.createElement(s.a,{text:t}))}},355:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(340),l=n(97),s=n(339),i=n(342);t.default=function(e){var t=e.summary;return(r.a.createElement("article",null,r.a.createElement(s.a,{summary:t},r.a.createElement("span",null,"Photo by"," ",r.a.createElement(l.a,{href:"https://unsplash.com/@docusign",target:"_blank"},"DocuSign")," ","on"," ",r.a.createElement(l.a,{href:"https://unsplash.com",target:"_blank"},"Unsplash"))),r.a.createElement("p",null,"Looking for a comment service, Disqus is quite popular service. It offers free plan so my first move was to implement Disqus but then I got to know ",r.a.createElement("strong",null,"Utterances"),"."),r.a.createElement("p",null,r.a.createElement("strong",null,"Utterances")," is comment service based on github issue and it is relatively\xa0light to Disqus."),r.a.createElement("p",null,"It is not hard to install on your website and the weak point is it allows only users with a github account to access, but among developers who wouldn\u2019t have a github account?"),r.a.createElement("p",null,"(And after installed I get to know that utterances does not give you the authority to delete or edit it on the page, you should do it on the issue page.)"),r.a.createElement("h3",null,"Utterances On Static"),r.a.createElement("p",null,"There\u2019s nothing much you do to install utterances on the static website.",r.a.createElement("br",null),"It provides all the information you need,"),r.a.createElement("ol",null,r.a.createElement("li",null,"Got to\xa0",r.a.createElement(l.a,{href:"https://github.com/apps/utterances",target:"_blank"},"Github app"),"\xa0and install Utterances App where you\u2019d like to have comment(issue) created",r.a.createElement(i.a,{src:"https://miro.medium.com/max/3976/1*dwJLsVTfu0DH6qxwyg_D9g.png",alt:"Image for post"})),r.a.createElement("li",null,"Go to the\xa0",r.a.createElement(l.a,{href:"https://utteranc.es/",target:"_blank"},"Website"),"\xa0and fill the information required (label should exist)"),r.a.createElement("li",null,"Copy and paste the script tag and put it where you\u2019d like to plant, where you put the script would designate where you put comment section",r.a.createElement(i.a,{src:"https://miro.medium.com/max/2764/1*vbe77872b0QeamUmNdsFMw.png"}))),r.a.createElement("p",null,"So if you have static webpage, that\u2019s all you need to do.",r.a.createElement("br",null),"But unfortunately mine works as single page application."),r.a.createElement("h3",null,"Utterances On SPA"),r.a.createElement("p",null,"Checking the script for the spa\u2019s sake, turns out it reads comment and create the element at the moment of demand."),r.a.createElement("p",null,"So here\u2019s how it works."),r.a.createElement("ol",null,r.a.createElement("li",null,"you add the script."),r.a.createElement("li",null,"script runs."),r.a.createElement("li",null,"Append iframe with the url which controls pretty everything.")),r.a.createElement("p",null,"It accesses the information by\xa0 ",r.a.createElement("em",null,"document.currentScript"),"\xa0and get the location and information and then append the iframe with comment html at the next position, then delete the script tag."),r.a.createElement("p",null,"If I load script everytime on the location , it doesn\u2019t really harm anything of the app but 2things."),r.a.createElement("ol",null,r.a.createElement("li",null,"append same style tag per loading."),r.a.createElement("li",null,"attaches message eventHandler to change the height of iframe, so multiple eventHandlers doing the same work.")),r.a.createElement("p",null,"In conclusion, all we need is the url on iframe element. That\u2019s it!"),r.a.createElement("h1",null,"Code"),r.a.createElement("p",null,"Here\u2019s the codes that I made.."),r.a.createElement(o.a,{code:"import React, { useEffect } from 'react';\nimport styled from 'styled-components';\n\nconst Container = styled.div`\n iframe {\n    position: relative;\n    box-sizing: border-box;\n    width: 100%;\n    max-width: 760px;\n    margin-left: auto;\n    margin-right: auto;\n    border: none;\n  }\n`;\n\n// deparam and params are from the library \nfunction deparam(query: string): Record<string, string> {\n  let match: RegExpExecArray | null;\n  const plus = /\\+/g;\n  const search = /([^&=]+)=?([^&]*)/g;\n  const decode = (s: string) => decodeURIComponent(s.replace(plus, ' '));\n  const params: Record<string, string> = {};\n  // tslint:disable-next-line:no-conditional-assignment\n  while ((match = search.exec(query))) {\n    params[decode(match[1])] = decode(match[2]);\n  }\n  return params;\n}\n\nfunction param(obj: Record<string, string>) {\n  const parts = [];\n  for (const name in obj) {\n    if (obj.hasOwnProperty(name) && obj[name]) {\n      parts.push(`${encodeURIComponent(name)}=${encodeURIComponent(obj[name])}`);\n    }\n  }\n  return parts.join('&');\n}\n\nconst UTTERANCE_URL = 'https://utteranc.es';\nconst UTTERANCE_HTML_SRC = `${UTTERANCE_URL}/utterances.html`;\n\ninterface ResizeMessage {\n  type: 'resize';\n  height: number;\n}\nconst sizeEventHandler = (event: MessageEvent) => {\n  if (event.origin !== UTTERANCE_URL) {\n    return;\n  }\n  const data = event.data as ResizeMessage;\n  if (data && data.type === 'resize' && data.height) {\n    const container = document.querySelector('.utterances-frame') as HTMLIFrameElement;\n    if (container) {\n      container.style.height = `${data.height}px`;\n    }\n  }\n};\n\ninterface CommentProps {\n  repo: string;\n  label: string;\n  title?: string;\n  theme?: string;\n  ogTitle?: string;\n  issueTerm?: 'title' | 'pathname' | 'url' | 'ogTitle';\n  pathname?: string;\n}\n\nconst getMetaContent = (t: string) => {\n  const metaTag = document.querySelector(\n    `meta[property='${t}'], meta[name='${t}']`,\n  ) as HTMLMetaElement;\n  return metaTag ? metaTag.content : '';\n};\n\nconst createParams = (\n  option: Omit<CommentProps, 'issueTerm'> & { ['issue-term']: string },\n): Record<string, string> => {\n  const params = deparam(location.search.slice(1));\n  const theme =\n    option.theme ||\n    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'github-dark' : 'github-light');\n  const origin = `${location.protocol}//${location.host}`;\n  const url = origin + location.pathname + location.search;\n  const title = option.title || document.title;\n  const ogTitle = option.ogTitle || getMetaContent('og:title');\n  const description = getMetaContent('description').slice(0, 50);\n  const pathname =\n    option.pathname ||\n    (location.pathname === '/' ? 'index' : location.pathname.slice(1).replace(/\\.\\w+$/, ''));\n  return {\n    ...params,\n    ...option,\n    theme,\n    url,\n    origin,\n    pathname,\n    title,\n    ['og:title']: ogTitle,\n    description,\n    ogTitle: '',\n  };\n};\n\nexport const PostComment = ({\n  title,\n  repo,\n  pathname,\n  theme,\n  label,\n  issueTerm,\n  ogTitle,\n}: CommentProps) => {\n  useEffect(() => {\n    window.addEventListener('message', sizeEventHandler);\n    return () => {\n      window.removeEventListener('message', sizeEventHandler);\n    };\n  }, []);\n  const params = param(\n    createParams({\n      title,\n      repo,\n      'issue-term': issueTerm || 'pathname',\n      label,\n      theme,\n      ogTitle,\n      pathname,\n    }),\n  );\n  return (\n    <Container>\n      <iframe\n        className=\"utterances-frame\"\n        title=\"Comments\"\n        scrolling=\"no\"\n        src={`${UTTERANCE_HTML_SRC}?${params}`}\n        loading=\"lazy\"\n      />\n    </Container>\n  );\n};\n"}),r.a.createElement("p",null,"So it is basically copy and paste and works good."),r.a.createElement("p",null,"Library might change the rule or parameter name later, but mine is a small private blog, so\xa0",r.a.createElement("strong",null,"first happen, then fix"),"\xa0wouldn\u2019t seem too bad."),r.a.createElement("p",null,"It you have same problem like me I hope this can help put your pain away."),r.a.createElement("p",null,"Thank you and thanks to utterances author for the great job."),r.a.createElement("p",null,"+ Before it supported utterances-loaded event but author decided to put that away due to abusing: see\xa0",r.a.createElement(l.a,{href:"https://github.com/utterance/utterances/issues/296",target:"_blank"},"here")),r.a.createElement("p",null,"+ The code assums that only one utterances iframe exists at the same time, but if it is not the case",r.a.createElement("br",null),"you should manage that messageEventHandler for each instance.",r.a.createElement("br",null),"Otherwise there's some moment which is vulnerable to listening the event.")))}}}]);