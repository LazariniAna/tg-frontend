import { useEffect, useRef } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.snow.css';

import './style.css';

interface TextEditorProps {
    title?: string;
    field: string;
    initialValue?: string;
    error?: string;
    setFieldValue: (field: string, value: string) => void;
}

const Editor: React.FC<TextEditorProps> = ({ title, field, initialValue = '', error, setFieldValue }) => {
    const hasInitialValue = useRef(false)
    const { quill, quillRef, Quill } = useQuill({
        modules: { blotFormatter: {} }
    });

    if (Quill && !quill) {
        Quill.register('modules/blotFormatter', BlotFormatter);
    }


    useEffect(() => {
        if (quill) {
            if (!hasInitialValue.current && initialValue) {
                quill.clipboard.dangerouslyPasteHTML(initialValue);
                hasInitialValue.current = true;
            }
            quill.on('text-change', () => {
                const currentContents = quill.getContents();
                const content = quill.root.innerHTML; // Obter HTML bruto
                setFieldValue(field, content);
            });
        }
    }, [quill, Quill, initialValue, field, setFieldValue]);

    useEffect(() => {
        if (quill) {
            const toolbar = quill.getModule('toolbar');
            toolbar.addHandler('float', (value: any) => {
                const range = quill.getSelection();
                if (range) {
                    const [image] = quill.getLeaf(range.index);
                    if (image && image.domNode.tagName === 'IMG') {
                        image.domNode.classList.toggle('float-left', value === 'left');
                        image.domNode.classList.toggle('float-right', value === 'right');
                        image.domNode.classList.toggle('float-center', value === 'center');
                    }
                }
            });
        }
    }, [quill]);

    return (
        <div className='w-full border-2 p-2 h-[1010px] min-w-full rounded resize' style={{ resize: 'both', overflow: 'auto' }}>
            <label htmlFor="editorText" className="mb-2 font-bold">{title}</label>
            <div ref={quillRef} />
            {error && <div className="text-red-500 pl-2 text-sm">{error}</div>}
        </div>
    );
};

export default Editor;
