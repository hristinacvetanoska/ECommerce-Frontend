import { Edit, Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { string } from "yup/lib/locale";
import agent from "../../app/api/agent";
import { NewProduct } from "../../app/models/newProduct";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { currencyFormat } from "../../app/util/util";
import { removeProduct } from "../catalog/catalogSlice";

export default function NewProducts() {
  const [newProducts, setNewProducts] = useState<NewProduct[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [target, setTarget] = useState(0);
  const { user } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  useEffect(() => {
    {
      user &&
        agent.NewProduct.list(user.email)
          .then((newProducts) => setNewProducts(newProducts))
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
    }
  }, []);

  /*   function handleDeleteProduct(id: number) {
    setLoading(true);
    setTarget(id);
    agent.Seller.deleteProduct(id)
      .then(() => dispatch(removeProduct(id)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  } */
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newProducts?.map((newProducts) => (
            <TableRow
              key={newProducts.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {newProducts.id}
              </TableCell>
              <TableCell align="left">
                <Box display="flex" alignItems="center">
                  <img
                    src={newProducts.pictureUrl}
                    alt={newProducts.name}
                    style={{ height: 50, marginRight: 20 }}
                  />
                  <span>{newProducts.name}</span>
                </Box>
              </TableCell>
              <TableCell align="right">
                {currencyFormat(newProducts.price)}
              </TableCell>
              <TableCell align="center">{newProducts.type}</TableCell>
              <TableCell align="center">{newProducts.brand}</TableCell>
              <TableCell align="center">
                {newProducts.quantityInStock}
              </TableCell>
              <TableCell align="right">
                <Button
                  //onClick={() => handleSelectProduct(newProducts)}
                  startIcon={<Edit />}
                />
                <LoadingButton
                  loading={loading && target === newProducts.id}
                  startIcon={<Delete />}
                  color="error"
                  //onClick={() => handleDeleteProduct(newProducts.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
