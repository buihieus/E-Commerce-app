import { View, Text, StyleSheet, FlatList } from "react-native";
import { PRODUCTS } from "../../../assets/products";
import { ProductListItem } from "../../component/product-list-item";
import { ListHeader } from "../../component/list-header";

const Home = () => {
    return (
        <View>
            <FlatList
                data={PRODUCTS}
                renderItem={({ item }) => (
                    <ProductListItem product={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                ListHeaderComponent={ListHeader}
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