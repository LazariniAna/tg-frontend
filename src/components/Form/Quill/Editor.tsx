import { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';

import './styles.css';

Quill.register('modules/imageResize', ImageResize);

interface EditorProps {
    placeholder?: string;
}

interface EditorState {
    editorHtml: string;
    theme: string;
}

class Editor extends Component<EditorProps, EditorState> {
    constructor(props: EditorProps) {
        super(props);
        this.state = {
            editorHtml: '',
            theme: 'snow'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(html: string) {
        this.setState({ editorHtml: html });
        (html);
    }

    render() {
        return (
            <ReactQuill
                theme={this.state.theme}
                onChange={this.handleChange}
                value={this.state.editorHtml}
                modules={Editor.modules}
                formats={Editor.formats}
                bounds={'#root'}
                placeholder={this.props.placeholder}
            />
        );
    }

    static modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' }
            ],
            ['link', 'image', 'video'],
            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
            ['clean']
        ],
        clipboard: {
            matchVisual: false
        },
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize']
        }
    };


    static formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video'
    ];
}

export default Editor;
