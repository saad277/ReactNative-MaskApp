import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {Card} from '../../Components/Card';
import {Header} from '../../Components/Header';
import {OverlayLoader} from '../../Components/OverlayLoader';
import {getListing} from '../../Store/actions';

interface listItem {
  item: object;
  index: number;
}

interface HomeProps {
  getListing: Function;
  fetching: boolean;
  list: [];
}

const Home: React.FC<HomeProps> = (props) => {
  const {getListing, fetching, list} = props;

  useEffect(() => {
    getListing();
  }, []);

  const renderList = ({item, index}: listItem) => {

    console.log(typeof item)

    return <Card key={index} {...item} />;
  };

  return (
    <View style={styles.container}>
      {fetching && <OverlayLoader />}
      <Header title="Home" />
      <FlatList
        data={list}
        renderItem={renderList}
        numColumns={2}
        key={2}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const mapStateToProps = (state: any) => {
  return {
    fetching: state.media.fetching,
    list: state.media.list,
  };
};

const mapDispatchToProps = {
  getListing,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
