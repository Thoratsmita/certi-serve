import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './App.css';
import logo from './images/certi-serv-logo.png';
import { useDropzone } from 'react-dropzone';

export default function PostProject() {

    const [projectName, setProjectName] = useState('');
    const [projectDescrp, setProjectDescrp] = useState('');
    const [files, setFiles] = useState([]);
    const imageMaxSize = 26214400; //bytes

    const { getRootProps, getInputProps, open, acceptedFiles, fileRejections } = useDropzone({

        noClick: false,
        noKeyboard: true,
        maxFiles: 3,
        accept: "image/*",
        maxSize: { imageMaxSize },
        onDrop: acceptedFiles => {
            setFiles(...files, acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    // const thumb = acceptedFiles.map(file => (
    //     <li key={file.path}>
    //         {file.path} - {file.size} bytes
    //     </li>
    // ));

    // const fileRejectionItems = fileRejections.map(({ file, errors }) => (      

    //         errors.map(e => (
    //           console.log(e.message)
    //         ))


    //   ));

    const thumbs = acceptedFiles.map(file => (
        <div key={file.name}>
            <div>
                <img
                    src={file.preview} style={{height: '20px'}}

                />
            </div>
        </div>
    ));

    useEffect(() => {

        $('#projectdescription').on('input', function () {
            $('#count').text(4000 - $(this).val().length);
        });

        console.log("Name=> " + projectName + " Description=> " + projectDescrp);
        // files.map(file => {
        //     console.log("file:" + file.name);
        // })

        if (fileRejections && fileRejections.length > 0) {
            fileRejections.map(({ file, errors }) => (
                errors.map(e => ($('#fileError').text(e.message)))
            ));   
        }

    }, [projectName, projectDescrp, files])

    return (
        <div className="PostPrj">
            <div className="PostPrjLogo">
                <img src={logo} alt="Certi-Serv Logo" />
            </div>
            <div className="PostPrjTxt">
                <h1>Tell us what you need done</h1>
                <p>Contact skilled freelancers within minutues. View profiles, ratings, portfolios and chat with them. Pay the freelancer
                    only when you are 100% satisfed with their work.</p>
            </div>
            <form className="PostPrjForm">
                <label htmlFor="projectname">Choose a name for your project</label>
                <input
                    type="text"
                    name="projectname"
                    id="projectname"
                    placeholder="e.g. Build me a website"
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                />
                <label htmlFor="projectdescription">Tell us more about your project</label>
                <p>Start with a bit about yourself or your business, and include an overview of what you need done.</p>
                <textarea
                    rows="4"
                    cols="25"
                    name="projectdescription"
                    id="projectdescription"
                    maxLength="4000"
                    placeholder="Describe your project here"
                    onChange={(e) => setProjectDescrp(e.target.value)}
                    required
                />
                <div className="wordcount"><span id="count">4000</span> characters remaining</div>
                <div className="formfile">
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <div className="dropdown">
                            <button id="dropdownbtn" type="button">
                                <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>+</span> Upload Files
                            </button>
                            {(files.length < 1) ? (
                                <p id="dropdowntxt">Drag & drop any images or documents that might be helpful in explaining your brief
                                here (Max file size: 25 MB).</p>
                            ) : (
                                <div id="dropdowntxt">{thumbs}</div>
                            )}
                        </div>
                    </div>
                    <ul></ul>
                </div>
                <span id="fileError"></span>
            </form>
        </div>
    )
}
