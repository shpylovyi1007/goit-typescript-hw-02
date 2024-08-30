import { Formik, Form, Field, FormikHelpers } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";
import React from "react";
import { ISearchBar, ISearchFormValues } from "./SearchBar.types";


const initValues:ISearchFormValues = {
  query: "",
};


const SearchBar: React.FC<ISearchBar> = ({ onSearch }) => {
  const notify = () => toast.error("Please, write search query!");

  const handleSearch:any = (
    values: ISearchFormValues,
    { resetForm }: FormikHelpers<ISearchFormValues>
  ) => {
    const query = values.query.trim();

    if (query === "") {
      return notify();
    }
    onSearch(query);
    resetForm();
  };

  return (
    <header>
      <Formik initialValues={initValues} onSubmit={handleSearch}>
        {(formikProps) => (
          <Form className={css.form}>
            <Field
              className={css.input}
              name="query"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.sendBtn} type="submit">
              <BiSearch />
              Search
            </button>
            <Toaster position="top-right" reverseOrder={false} />
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;