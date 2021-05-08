import React from 'react';

// style
import { RoundButton } from '../shared_style';

export const CountDownButton = ({
  onClick,
  isDisabled,
}) => (
  <RoundButton onClick={onClick} disabled={isDisabled}>
    ー
  </RoundButton>
)



// // // import * as React from "react";
// // // import { useForm } from "react-hook-form";

// // // // フォームにあるフィールドの型の定義
// // // type FormData = {
// // //   firstName: string;
// // //   lastName: string;
// // // };

// // // export default function App() {
// // //   const { register, setValue, handleSubmit, errors } = useForm<FormData>(); // フィールドの型定義をuseFormに適応する
// // //   // handleSubmitの引数にはフィールドの型定義が適応されている
// // //   const onSubmit = handleSubmit(({ firstName, lastName }) => {
// // //     console.log(firstName, lastName);
// // //   });

// // //   return (
// // //     <form onSubmit={onSubmit}>
// // //       <label>First Name</label>
// // //       <input name="firstName" ref={register} />
// // //       <label>Last Name</label>
// // //       <input name="lastName" ref={register} />
// // //       <button
// // //         type="button"
// // //         onClick={() => {
// // //           // setValueにも型定義が適応されている
// // //           setValue("lastName", "luo"); // OK
// // //           setValue("firstName", true); // コンパイルエラー
// // //           errors.bill; // errorsにも型定義が適応されているのでコンパイルエラー
// // //         }}
// // //       >
// // //         SetValue
// // //       </button>
// // //     </form>
// // //   );

// // // }

// // import React from "react";
// // import { useForm } from "react-hook-form";

// // type Post = {
// //   title: string;
// //   content: string;
// // };

// // function App() {
// //   const { register } = useForm<Post>();
// //   return (
// //     <form>
// //       <input name="title" ref={register({ required: true, maxLength: 30 })} />
// //       <textarea name="content" ref={register} />
// //     </form>
// //   );
// // }

// import React from "react";
// import { useForm } from "react-hook-form";

// interface IFormInput {
//   email: string;
//   password: string;
// }

// export default function App() {
//   const { register, handleSubmit } = useForm<IFormInput>();
//   const onSubmit = (data: IFormInput) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("email", { required: true, maxLength: 20 })} />
//       <input {...register("password", { required: true })/>
//     </form>
//   );
// }

import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
