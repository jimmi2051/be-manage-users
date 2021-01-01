export default async (req: any, res: any) => {
  try {
    res.send({ status: true, description: "Server is alive!" });
  } catch (err) {
    res.send({ status: false, description: err.message });
  }
};
