import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { Navigate } from 'react-router-dom'

import 'react-quill/dist/quill.snow.css';
import { API_URL } from '../config';
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean']
  ]
};
const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link', 'image'
];
function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [file, setFile] = useState(null);
  async function createNewPost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('image', file);

    console.log("files", file)
    const response = await fetch(`${ API_URL }/post`,
      {
        method: 'POST',
        body: data,
        credentials:'include',

      }

    );
    if(response)
    {
      setRedirect(true);
    }
    //console.log("reponse post", await response.json());
  }
  if (redirect){
    return <Navigate to="/" />
  }
  return (
    <form onSubmit={createNewPost}>
      <input type="title"
        placeholder='Title'
        value={title}
        onChange={ev => setTitle(ev.target.value)}
      />
      <input type="summary"
        placeholder='summary'
        value={summary}
        onChange={ev => setSummary(ev.target.value)}
      />
      <input type='file' onChange={ev => { console.log(ev.target.files),setFile(ev.target.files[0])}} />
      <ReactQuill
        value={content}
        onChange={newValue => setContent(newValue)}
        modules={modules} formats={formats}
      />
      <button style={{ marginTop: '10px' }} >
        Create Post</button>
    </form>
  )
}

export default CreatePost
