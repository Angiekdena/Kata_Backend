const z = require('zod');

const userShema = z.object({
  name: z.string().min(4, 'The name must be at least 4 characters long'),
  email: z.string().email({
    invalid_type_error: 'Email must have a similar structure correo@correo.com',
    required_error: 'Email is required.'
  }),
  password: z.string().min(4, 'The password must be at least 4 characters long')
});

const notesShema = z.object({
  title: z.string(),
  description: z.string()
});

function validateUser (input) {
  return userShema.safeParse(input);
}

function validatePartialUser (input) {
  return userShema.partial().safeParse(input);
}

function validateNotes (input) {
  return notesShema.safeParse(input);
}

function validatePartialNotes (input) {
  return notesShema.partial().safeParse(input);
}

module.exports = {
  validateUser,
  validatePartialUser,
  validateNotes,
  validatePartialNotes
};
