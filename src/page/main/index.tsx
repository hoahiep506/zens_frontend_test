import Quill from 'quill';
import 'quill-mention';
import 'quill/dist/quill.snow.css';
import { useEffect, useRef, useState } from 'react';

async function suggestPeople(searchTerm: string) {
  const allPeople = [
    {
      id: 1,
      value: 'Fredrik Sundqvist',
    },
    {
      id: 2,
      value: 'Patrik Sjölin',
    },
  ];
  return allPeople.filter((person) => person.value.includes(searchTerm));
}

const MainPage = () => {
  const quillRef = useRef(null);
  const [editor, setEditor] = useState<Quill>();
  useEffect(() => {
    if (quillRef.current) {
      const newEditor = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          mention: {
            allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
            mentionDenotationChars: ['@', '#'],
            source: async function (searchTerm: string, renderList: any) {
              const matchedPeople = await suggestPeople(searchTerm);
              renderList(matchedPeople);
            },
          },
        },
      });
      newEditor.keyboard.addBinding(
        { key: 'Escape' },
        {
          collapsed: true,
          format: ['code-block'],
        },
        () => {
          newEditor.insertText(newEditor.getLength() - 1, '\n');
          newEditor.format('code-block', false);
        }
      );
      newEditor.keyboard.addBinding(
        { key: 'Backspace' },
        {
          collapsed: true,
          format: ['code-block'],
        },
        () => {
          newEditor.format('code-block', false);
        }
      );

      newEditor.on('text-change', (delta) => {
        const index = newEditor.getLength() - 1;
        const one = newEditor.getContents(index - 1, 1)?.ops[0]?.insert;
        const two = newEditor.getContents(index - 2, 1)?.ops[0]?.insert;
        const three = newEditor.getContents(index - 3, 1)?.ops[0]?.insert;
        const currentFormat = newEditor.getFormat();

        if (
          `${one}${two}${three}` === '```' &&
          !currentFormat?.['code-block']
        ) {
          newEditor.deleteText(index - 3, 3);
          console.log(newEditor.getLength());
          if (newEditor.getLength() > 1) {
            newEditor.insertText(newEditor.getLength() - 1, '\n');
          }
          newEditor.format('code-block', true);
        }
      });
      setEditor(newEditor);
    }
  }, []);

  return (
    <div>
      <div id='test' ref={quillRef}></div>
    </div>
  );
};

export default MainPage;
