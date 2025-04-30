import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Todo() {
  const [lists, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5') //  API endpoint
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.error("Error fetching data", error);
      });
  }, []);

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    // Add  delete logic here, e.g. axios.delete
    alert(`Delete item with ID: ${id}`);
  };

  const handleCreateTask = () => {
    navigate("/create");
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>To-Do List</h3>
        <button className="btn btn-primary" onClick={handleCreateTask}>
          + Create Task
        </button>
      </div>

      {lists.length === 0 ? (
        <p className="text-muted">No tasks available.</p>
      ) : (
        lists.map((item) => (
          <div className="card mb-3" key={item.id}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">{item.title}</h5>
              <div>
                <button
                  className="btn btn-success me-2"
                  onClick={() => handleUpdate(item.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
