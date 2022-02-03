import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { EditorState } from 'draft-js';
import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import Header from '../components/navBar/Header';

const Faq = () => {
  const [tags, setTags] = React.useState([{ text: '', id: '' }]);

  const handleDelete = (i: number) => {
    setTags(tags.filter((tag, index) => index !== i));
  };
  type tagTypes = { id: string; text: string };

  const handleAddition = (tag: tagTypes) => {
    setTags([...tags, tag]);
  };
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
    console.log(editorState.getCurrentContent().getPlainText());
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="w-full md:w-3/4 m-auto">
        <div className="bg-white">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        <div>
          <h1 className="text-2xl">Tags</h1>
          <p>add up to 5 tags to describe your question above</p>
          <ReactTags
            tags={tags}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
