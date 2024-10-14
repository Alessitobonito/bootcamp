import { useState } from 'react';
import AppointmentForm from '../components/appointments/AppointmentForm';
import AppointmentList from '../components/appointments/AppointmentList';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [appointmentSelected, setAppointmentSelected] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveAppointment = (newAppointment) => {
    console.log('Me están llamando al guardar el form desde el componente padre', newAppointment);

    if (isEditing) {
      const updatedAppointments = appointments.map(appointment =>
        appointment.id === newAppointment.id ? newAppointment : appointment
      );
      setAppointments(updatedAppointments);
      setIsEditing(false);
    } else {
      setAppointments([...appointments, newAppointment]);
    }
    setAppointmentSelected({});
  };

  const handleRemoveAppointment = (id) => {
    console.log(id);
    const newAppointments = appointments.filter(
      appointment => appointment.id !== id
    );
    setAppointments(newAppointments);
  };

  const handleEditAppointment = (appointment) => {
    setAppointmentSelected(appointment);
    setIsEditing(true);
  };

  const handleConfirmAppointment = (id) => {
    // TODO: Manejar la confirmación y cancelación de una cita (Esta funcionalidad es libre)
  };

  return (
    <>
      <AppointmentForm
        onSave={handleSaveAppointment}
        appointment={appointmentSelected}
        isEditing={isEditing}
      />
      <AppointmentList
        appointments={appointments}
        onRemove={handleRemoveAppointment}
        onEdit={handleEditAppointment}
        onConfirm={handleConfirmAppointment}
      />
    </>
  );
};

export default Appointments;
