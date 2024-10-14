/* eslint-disable react/prop-types */
import { Formik, Form, Field } from "formik";

export default function RegisterForm({ event }) {
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    // console.log(values);
  };
  return (
    <div key={event.id} className="modal-box">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          age: "",
          course: event.name,
        }}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <p className="font-bold text-lg mb-5">{event.name}</p>
            <label htmlFor="firstName">Ad</label>
            <Field
              name="firstName"
              className="input input-bordered w-full mb-2"
            />
            <label>Soyad</label>
            <Field
              name="lastName"
              className="input input-bordered w-full mb-2"
            />
            <label>E-mail</label>
            <Field name="email" className="input input-bordered w-full mb-2" />
            <label>Telefon</label>
            <Field name="phone" className="input input-bordered w-full mb-2" />
            <label>Yaş</label>
            <Field name="age" className="input input-bordered w-full mb-2" />
            <div className="flex justify-center space-x-2">
              <button className="btn btn-ghost" type="reset">
                Temizle
              </button>
              <button className="btn btn-neutral" type="submit">
                Gönder
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
