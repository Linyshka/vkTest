import { FormItem, FormLayoutGroup, Group, Panel, PanelHeader, Select, View } from '@vkontakte/vkui';
import { useContext, useEffect, useState } from 'react';
import { getColors } from '../../api';
import { FiltersContext } from '../../constants/FiltersContext';
import styles from "./Filters.module.css";

const Filters = () => {
  const [colorOptions, setColorOptions] = useState<string[]>();
  const context = useContext(FiltersContext);

  useEffect(() => {
    getColors().then((data) => setColorOptions(data));
  })

  return (
    <View className={styles.filters} activePanel="FormLayoutGroup">
      <Panel id="FormLayoutGroup">
        <PanelHeader>Фильтры</PanelHeader>
        <Group>
            <FormLayoutGroup mode="vertical" segmented>
              {colorOptions && <FormItem top="Цвет аватарки">
                   <Select
                    options={colorOptions?.map((i) => ({
                      label: i,
                      value: i,
                    }))}
                    value={context.color}
                    onChange={(e) => context.setColor(e.target.value)}
                    />
              </FormItem>}
            </FormLayoutGroup>
            <FormLayoutGroup>
              <FormItem top="Наличие друзей в группе">
                   <Select
                    options={["Все", "Есть", "Нет"].map((i) => ({
                      label: i,
                      value: i,
                    }))}
                    value={context.friends}
                    onChange={(e) => context.setFriends(e.target.value)}
                    />
              </FormItem>
            </FormLayoutGroup>
            <FormLayoutGroup>
              <FormItem top="Тип приватности">
                   <Select
                    options={["Все", "Закрытая", "Открытая"].map((i) => ({
                      label: i,
                      value: i,
                    }))}
                    value={context.privacyType}
                    onChange={(e) => context.setPrivacyType(e.target.value)}
                    />
              </FormItem>
            </FormLayoutGroup>
        </Group>
      </Panel>
    </View>
  )
}

export default Filters;