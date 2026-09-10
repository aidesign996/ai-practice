// Keep diagram enlargement in the same dark reading environment.
const diagramViewer=document.createElement('dialog');
const diagramLabels=document.documentElement.lang==='en'?['View diagram','Close']:document.documentElement.lang==='zh-Hant'?['檢視流程圖','關閉']:['查看流程图','关闭'];
diagramViewer.className='figure-viewer';
diagramViewer.setAttribute('aria-label',diagramLabels[0]);
diagramViewer.innerHTML=`<button type="button" class="viewer-close" autofocus>${diagramLabels[1]}</button><div class="viewer-image"></div>`;
document.body.append(diagramViewer);
diagramViewer.querySelector('button').addEventListener('click',()=>diagramViewer.close());
diagramViewer.addEventListener('click',event=>{if(event.target===diagramViewer){const box=diagramViewer.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)diagramViewer.close();}});
for(const link of document.querySelectorAll('.article-body .figure-image')){
  link.addEventListener('click',event=>{
    if(event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    event.preventDefault();
    const image=link.querySelector('img').cloneNode();
    image.removeAttribute('style');
    image.loading='eager';
    diagramViewer.querySelector('.viewer-image').replaceChildren(image);
    diagramViewer.showModal();
  });
}
