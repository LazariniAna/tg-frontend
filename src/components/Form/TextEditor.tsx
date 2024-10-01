import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
    title?: string;
    field: string;
    initialValue?: string;
    error?: string;
    setFieldValue: (field: string, value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ initialValue = '', setFieldValue, title, field, error }) => {
    return (
        <div className='w-full border-2 p-2 h-[410px] min-w-full rounded resize' style={{ resize: 'both', overflow: 'auto' }}>
            <label htmlFor="editorText" className="mb-2 font-bold">{title}</label>
            <ReactQuill
                value={initialValue}
                onChange={(content) => setFieldValue(field, content)}
                theme="snow"
                style={{  height: '83%',  }}
                modules={{
                    toolbar: [
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'align': ['center', 'right', 'justify'] }],
                        ['bold', 'italic', 'underline'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
                        [{ 'script': 'sub'}, { 'script': 'super' }],
                        [{ 'indent': '-1'}, { 'indent': '+1' }], 
                        ['link', 'image'],
                        ['clean'],
                    ],
                }}
            />
            {error && <div className="text-red-500 pl-2 text-sm">{error}</div>}
        </div>

    );
};

export default TextEditor;
