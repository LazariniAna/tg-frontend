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
    setFieldValue?: (field: string, value: string) => void;
    readOnly?: boolean;
}

const Editor: React.FC<TextEditorProps> = ({ title, field, initialValue = '', error, setFieldValue, readOnly }) => {
    const hasInitialValue = useRef(false);
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
                const content = quill.root.innerHTML; // Obter HTML bruto
                setFieldValue && setFieldValue(field, content);
            });
        }
    }, [quill, initialValue, field, setFieldValue]);

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
        <div className={`editor-container ${readOnly ? 'readonly' : ''}`}>
            {title && <label htmlFor="editorText" className="editor-title">{title}</label>}
            {!readOnly && <div ref={quillRef} />}
            {readOnly && <div ref={quillRef} style={{ pointerEvents: 'none' }} />}
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Editor;
