import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { currencyFormat } from "../../app/util/util";
import { addBasketItemAsync } from "../basket/basketSlice";
interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  const [productOfDay, setProductOfDay] = useState<Product | null>(null);
  const { status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    agent.Orders.productOfDay()
      .then((productOfDay) => setProductOfDay(productOfDay))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {product.sellerName.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />
      <CardMedia
        sx={{
          height: 140,
          backgroundSize: "contain",
          ///bgcolor: "primary.light",
        }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color={"secondary"} variant="h5">
          {currencyFormat(product.price)}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.brand}/{product.type}
        </Typography>
        <>
          {productOfDay && productOfDay?.id === product.id && (
            <Typography display="block" color="#F85C70">
              Product of the day
            </Typography>
          )}
        </>
      </CardContent>
      <CardActions>
        <LoadingButton
          loading={status.includes("pendingAddItem" + product.id)}
          onClick={() =>
            dispatch(addBasketItemAsync({ productId: product.id }))
          }
          size="small"
        >
          Add to cart
        </LoadingButton>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">
          View
        </Button>
      </CardActions>
    </Card>
  );
}
