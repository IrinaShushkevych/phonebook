//created by Irina Shushkevych
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditOffRoundedIcon from "@mui/icons-material/EditOffRounded";
import SaveAltRoundedIcon from "@mui/icons-material/SaveAltRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import {
  useDeleteContactMutation,
  useEditContactMutation,
} from "../../redux/Contacts/contacts-api";
import s from "./ContactItem.module.css";
import Loader from "../Loader/Loader";
import { onError } from "../../utilits/messages";

export default function ContactItem({ id, nameContact, numberContact }) {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameContact);
  const [number, setNumber] = useState(numberContact);
  const [deleteContact, { isLoading, error: errorDelete }] =
    useDeleteContactMutation();
  const [changeContact, { error: errorEdit }] = useEditContactMutation();

  useEffect(() => {
    if (errorDelete) onError(`${errorDelete.status} ${errorDelete.data.msg}`);
  }, [errorDelete]);

  useEffect(() => {
    if (errorEdit) {
      onError(`${errorEdit.status} ${errorEdit.data.msg}`);
      setName(nameContact);
      setNumber(numberContact);
    }
  }, [errorEdit]);

  const onChange = (isCgange) => {
    if (!isCgange) {
      setName(nameContact);
      setNumber(numberContact);
    } else {
      changeContact({ contact: { name, number }, id });
    }
    setIsEdit(false);
  };

  return (
    <>
      <td className={s.cell}>
        {isEdit ? (
          <input
            type="text"
            name="name"
            className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        ) : (
          <span className={s.itemText}>{name}</span>
        )}
      </td>
      <td className={s.cell}>
        {isEdit ? (
          <input
            type="tel"
            name="number"
            className={s.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        ) : (
          <span className={s.itemText}>{number}</span>
        )}
      </td>
      <td className={s.cell}>
        {!isEdit && (
          <button
            type="button"
            className={s.button}
            data-id={id}
            onClick={() => {
              setIsEdit(true);
            }}
            disabled={isLoading}
          >
            <EditOffRoundedIcon fontSize="small" />
          </button>
        )}
        {isEdit && (
          <button
            type="button"
            className={s.button}
            data-id={id}
            onClick={() => {
              onChange(true);
            }}
            disabled={isLoading}
          >
            <SaveAltRoundedIcon fontSize="small" />
          </button>
        )}
        {isEdit && (
          <button
            type="button"
            className={s.button}
            data-id={id}
            onClick={() => {
              onChange(false);
            }}
            disabled={isLoading}
          >
            <HighlightOffRoundedIcon fontSize="small" />
          </button>
        )}
        <button
          type="button"
          className={s.button}
          data-id={id}
          onClick={() => {
            console.log(id);
            deleteContact(id);
          }}
          disabled={isLoading}
        >
          {isLoading && <Loader size={15} />}
          <DeleteForeverRoundedIcon fontSize="small" />
        </button>
      </td>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  nameContact: PropTypes.string.isRequired,
  numberContact: PropTypes.string,
};
