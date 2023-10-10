const deleteNoteQuery = require("../../db/queries/notes/deleteNoteQuery");

const deleteNote = async (req, res, next) => {
  try {
    const { noteId } = req.params;

    // Llama a la función de consulta para eliminar la nota de la base de datos.
    await deleteNoteQuery(noteId, req.user.id);

    res.send({
      status: "Success",
      message: "Nota eliminada",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteNote;
