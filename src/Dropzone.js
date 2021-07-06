import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { useDropzone } from 'react-dropzone';

const imageMaxSize = 26214400; //bytes

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


export default function Previews() {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps, fileRejections } = useDropzone({
        accept: 'image/*',
        maxFiles: 3,
        maxSize: { imageMaxSize },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    alt={file.name}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        
        files.forEach(file => URL.revokeObjectURL(file.preview));

        if (fileRejections && fileRejections.length > 0) {
            fileRejections.map(({ file, errors }) => (
                errors.map(e => ($('#fileError').text(e.message)))
            ));
        }

    }, [files]);

    return (
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag & drop any images or documents that might be helpful in explaining your brief here (Max file size: 25 MB).</p>
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
            <span id="fileError">----</span>
        </section>
    );
}

