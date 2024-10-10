import React, { useState, useEffect } from 'react';
import Avatar from 'boring-avatars';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const handleSave = (e) => {
    e.preventDefault();
    if (editingStudent) {
      const updatedStudents = students.map((student) =>
        student.id === editingStudent.id
          ? { ...student, name: nombre, city: ciudad }
          : student
      );
      setStudents(updatedStudents);
      setEditingStudent(null);
    } else {
      const newStudent = { id: Date.now(), name: nombre, city: ciudad };
      setStudents([...students, newStudent]);
    }
    setNombre('');
    setCiudad('');
  };

  const handleDelete = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleEdit = (student) => {
    setNombre(student.name);
    setCiudad(student.city);
    setEditingStudent(student);
  };

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Students List</h1>

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-8">
          <form className="space-y-4" onSubmit={handleSave}>
            <div>
              <label className="block mb-1">Nombre</label>
              <input
                type="text"
                placeholder="Ex. Mariana Navarro"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1">Ciudad</label>
              <input
                type="text"
                placeholder="Ex. Chiclayo"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black rounded-lg hover:bg-gray-800 focus:outline-none"
            >
              {editingStudent ? 'Actualizar' : 'Guardar'}
            </button>
          </form>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg space-y-4">
          {students.map((student) => (
            <div key={student.id} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">
                  <Avatar name="User" variant="beam" size={48} />
                </span>
              </div>
              <div className="flex-1">
                <div className="font-semibold">{student.name}</div>
                <div>{student.city}</div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(student)}
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
