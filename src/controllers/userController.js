const handleResponse = (res, status, data) => {
  res.status(status).json(data);
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    handleResponse(res, 200, users);
  } catch (error) {
    handleResponse(res, 500, { message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      return handleResponse(res, 404, { message: "User not found" });
    }
    handleResponse(res, 200, user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await createUser(req.body.name, req.body.email);
    if (!user) {
      return handleResponse(res, 400, { message: "User not created" });
    }
    handleResponse(res, 200, user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await updateUser(req.params.id, name, email);
    if (!user) {
      return handleResponse(res, 400, { message: "User not updated" });
    }
    handleResponse(res, 200, user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    if (!user) {
      return handleResponse(res, 400, { message: "User not deleted" });
    }
    handleResponse(res, 200, user);
  } catch (error) {
    next(error);
  }
};
