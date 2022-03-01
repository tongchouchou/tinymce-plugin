import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('toy', {
    text: 'button',
    onAction: () => {
      // editor.setContent('<p>content added from toy</p>');
      showDialog(editor);
    }
  });
  
};

const showDialog = (editor:Editor)=>{
  let contentStr = 
  '<div class="ocrDialog" style="width:280px;height:220px;background-color: #c3c3c3;position: fixed;left: 50%;top: 45px;transform: translateX(-50%);z-index:999;">' +
    '<img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/a859977f5d8b42e69aa27791e08d87d8?from=pc"/>'
  '</div>'
  editor.setContent(contentStr);
  
}

export default (): void => {
  tinymce.PluginManager.add('toy', setup);
};
