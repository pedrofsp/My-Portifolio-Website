import React from 'react';

import { connect } from 'react-redux';

function toggleLesson(module, lesson) {
  return { type: 'TOGGLE_LANGUAGE', module, lesson };
}

const Sidebar = ({ modules, dispatch }) => (
  <div>
    {modules.map((item) => {
      return (
        <div key={item.id}>
          <strong>{item.title}</strong>
          <ul>
            {item.lessons.map((lesson) => (
              <div style={{ display: 'flex' }}>
                <li key={lesson.id}>{lesson.title}</li>
                <button
                  onClick={() => {
                    dispatch(toggleLesson(item, lesson));
                  }}
                >
                  Selecionar
                </button>
              </div>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
);

export default connect((state) => ({ modules: state.modules }))(Sidebar);
