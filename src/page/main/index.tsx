import Quill from 'quill';
import 'quill-mention';
import 'quill/dist/quill.snow.css';
import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
const Container = Quill.import('blots/container');
const TextBlot = Quill.import('blots/text');
const BlockEmbed = Quill.import('blots/block/embed');

class QuoteBlot extends BlockEmbed {
  static blotName = 'quote';
  static tagName = 'blockquote';
  static className = 'quote';

  static create(value: any) {
    const node = super.create(value);
    node.setAttribute('class', this.className);
    node.innerHTML = value;
    return node;
  }

  static value(node: { getAttribute: (arg0: string) => string }) {
    return JSON.parse(node.getAttribute('data-quote'));
  }
}

Quill.register(QuoteBlot);

const MainPage = () => {
  const quillRef = useRef(null);
  const [editor, setEditor] = useState<Quill>();
  const id = useId();
  useLayoutEffect(() => {
    const textEditor = document.getElementById(id);

    return () => {};
  }, []);

  useEffect(() => {
    if (quillRef.current) {
      const newEditor = new Quill(quillRef.current, {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            [{ direction: 'rtl' }], // text direction
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ align: [] }],
            ['image'],
          ],
        },
        theme: 'snow',
      });
      setEditor(newEditor);
    }
    return () => {
      quillRef.current = null;
    };
  }, []);

  const handleSubmit = () => {
    console.log(editor?.root?.innerHTML);
  };
  const text = `<pre class="ql-syntax" spellcheck="false">asdasdasd
  asdasdasd
  asdas
  </pre><blockquote>asdfsadfsadf</blockquote><ul><li>2</li><li>1</li></ul>`;

  const handleQuote = () => {
    navigator.clipboard.writeText(text);
    const editorHTML = document.getElementById(id);
    const temp = editorHTML?.querySelector('.ql-editor');
    if (temp) {
      // temp.innerHTML = `${temp?.innerHTML}<blockquote>${text}</blockquote>`;
      if (editor) {
        editor.insertEmbed(editor.getLength() - 1, 'quote', text);
        editor.setSelection(editor.getLength(), 0);
      }
    }
  };

  return (
    <div>
      <div id={id} ref={quillRef}></div>
      <button className='bg-red-400' onClick={handleSubmit}>
        Submit
      </button>

      <p>${text}</p>

      <button onClick={handleQuote}>Copy</button>
    </div>
  );
};

export default MainPage;
