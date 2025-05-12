import { View, StyleSheet, FlatList, ActivityIndicator, Text} from "react-native";

import { PRODUCTS } from "../../../assets/products";
import { ProductListItem } from "../../component/product-list-item";
import { ListHeader } from "../../component/list-header";
import { getProductsAndCategories } from "../../api/api";

const Home = () => {
    const {data,error,isLoading} = getProductsAndCategories();

    if(isLoading) return <ActivityIndicator/>;

    if(error || !data) return <Text>{error?.message || "An error occured "}</Text>;
    


    return ( 
    // <Auth/>
        <View>
            <FlatList
                data={data.products}
                renderItem={({ item }) => (
                    <ProductListItem product={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                ListHeaderComponent={<ListHeader categories={data.categories} />}
                contentContainerStyle={styles.FlatListContent}
                columnWrapperStyle={styles.FlatListcolumn}
                style={{ paddingHorizontal: 10, paddingVertical: 5 }}
            />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    FlatListContent: {
        paddingBottom: 20,
    },
    FlatListcolumn: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    }
})