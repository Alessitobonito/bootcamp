import { useState, useEffect } from 'react';

const INITIAL_STATE = {
  id: '',
  petName: '',
  petAge: '',
  ownerName: '',
  appointmentDate: '',
  appointmentTime: '',
  symptoms: ''
};

const AppointmentForm = ({ onSave, appointment, isEditing }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  useEffect(() => {
    console.log('Estoy en el form y solo me ejecuto cuando appointment cambia', appointment);
    const hasAppointment = Object.keys(appointment).length > 0;

    if (hasAppointment) {
      setFormData(appointment);
    }
  }, [appointment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = isEditing ? formData : { ...formData, id: crypto.randomUUID() };
    onSave(newAppointment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="petName"
        value={formData.petName}
        onChange={handleChange}
        placeholder="Nombre de la mascota"
        className="p-2 border rounded mb-2 w-full"
      />
      <input
        type="number"
        name="petAge"
        value={formData.petAge}
        onChange={handleChange}
        placeholder="Edad de la mascota"
        className="p-2 border rounded mb-2 w-full"
      />
      <input
        type="text"
        name="ownerName"
        value={formData.ownerName}
        onChange={handleChange}
        placeholder="Nombre del dueño"
        className="p-2 border rounded mb-2 w-full"
      />
      <input
        type="date"
        name="appointmentDate"
        value={formData.appointmentDate}
        onChange={handleChange}
        placeholder="Fecha de la cita"
        className="p-2 border rounded mb-2 w-full"
      />
      <input
        type="time"
        name="appointmentTime"
        value={formData.appointmentTime}
        onChange={handleChange}
        placeholder="Hora de la cita"
        className="p-2 border rounded mb-2 w-full"
      />
      <textarea
        name="symptoms"
        value={formData.symptoms}
        onChange={handleChange}
        placeholder="Síntomas"
        className="p-2 border rounded mb-2 w-full"
      />
      <button type="submit" className="p-2 bg-blue-600 text-white rounded">
        {isEditing ? 'Actualizar' : 'Guardar'}
      </button>
    </form>
  );
};

export default AppointmentForm;
