/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

export default function RegisterForm({ event }) {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      setSubmitting(false);
      const person = values.firstName;
      toast.success(
        <span>
          Kaydın alındı <b>{person} </b>
        </span>,
        {
          style: {
            border: "1px solid rgb(65,74,92)",
            backgroundColor: "rgba(222, 252, 230)",
          },
          duration: 3000,
        }
      );
    }, 400);
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
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "En fazla 15 karakter girebilirsin!")
            .required("Zorunlu alan"),
          lastName: Yup.string()
            .max(15, "En fazla 15 karakter girebilirsin!")
            .required("Zorunlu alan"),
          email: Yup.string()
            .email("Geçersiz e-posta adresi!")
            .required("Zorunlu alan"),
          phone: Yup.string()
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Geçersiz telefon numarası!"
            )
            .max(10, "Çok uzun!")
            .min(10, "Çok kısa!")
            .required("Zorunlu alan"),
          age: Yup.number()
            .max(30, "En fazla 30 yaşındakiler kayıt yapabilir!")
            .min(18, "En az 18 yaşındakiler kayıt yapabilir!")
            .required("Zorunlu alan"),
        })}
        onSubmit={onSubmit}
      >
        {() => (
          <div>
            <Toaster />
            <Form>
              <p className="font-bold text-lg mb-5">{event.name}</p>
              <div className="flex justify-between items-end">
                <label htmlFor="firstName">Ad</label>
                <div className="text-error text-sm">
                  <ErrorMessage name="firstName" />
                </div>
              </div>
              <Field
                name="firstName"
                className="input input-bordered w-full mb-2"
              />

              <div className="flex justify-between items-end">
                <label>Soyad</label>
                <div className="text-error text-sm">
                  <ErrorMessage name="lastName" />
                </div>
              </div>
              <Field
                name="lastName"
                className="input input-bordered w-full mb-2"
              />

              <div className="flex justify-between items-end">
                <label>E-mail</label>
                <div className="text-error text-sm">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <Field
                name="email"
                className="input input-bordered w-full mb-2"
              />

              <div className="flex justify-between items-end">
                <label>Telefon</label>
                <div className="text-error text-sm">
                  <ErrorMessage name="phone" />
                </div>
              </div>
              <Field
                placeholder="başında 0 olmadan giriniz: (5xx)"
                type="number"
                name="phone"
                className="input input-bordered w-full mb-2"
              />

              <div className="flex justify-between items-end">
                <label>Yaş</label>
                <div className="text-error text-sm">
                  <ErrorMessage name="age" />
                </div>
              </div>
              <Field
                type="number"
                name="age"
                className="input input-bordered w-full mb-2"
              />

              <div className="flex justify-center space-x-2">
                <button className="btn btn-ghost" type="reset">
                  Temizle
                </button>
                <button className="btn btn-neutral" type="submit">
                  Gönder
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
