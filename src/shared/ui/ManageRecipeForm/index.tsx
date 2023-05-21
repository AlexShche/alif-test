import { FC, useEffect } from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Row,
  Col,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';

import { TManageRecipeFormFields } from './types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createRecipe, editRecipe } from '../../../redux/actions/recipes';

import styles from './style.module.css';

const { Option } = Select;

const measurementValues = ['шт', 'гр', 'кг'];

const ManageRecipeForm: FC = () => {
  const params = useParams();
  const requiredField = 'Обязательное поле';
  const dispatch = useAppDispatch();
  const { isEditRecipePage } = useAppSelector((state) => state.recipes);
  const { recipe } = useAppSelector((state) => ({
    recipe: state.recipes.recipes.find((recipe) => recipe.id === params.id),
  }));
  const [form] = Form.useForm();

  useEffect(() => {
    if (isEditRecipePage) form.setFieldsValue({ ...recipe });
  }, [isEditRecipePage]);

  const onFinish = (values: TManageRecipeFormFields) => {
    if (isEditRecipePage) return dispatch(editRecipe(values));
    dispatch(createRecipe(values));
  };

  return (
    <Form
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Название"
            name="name"
            rules={[{ required: true, message: requiredField }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Время приготовления"
            name="cooking_time"
            rules={[{ required: true, message: requiredField }]}>
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      <div className={styles.uploadBtnWrapper}>
        <Button>Загрузить изображение</Button>
        <input type="file" name="myfile" />
      </div>

      <Form.List name="ingredients">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <Form.Item
                  {...field}
                  label="Название ингредиента"
                  name={[field.name, 'name']}
                  rules={[{ required: true, message: requiredField }]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  {...field}
                  label="Количество ингредиента"
                  name={[field.name, 'quantity']}
                  rules={[{ required: true, message: requiredField }]}>
                  <InputNumber />
                </Form.Item>

                <Form.Item
                  {...field}
                  label="Вид количества ингредиента"
                  name={[field.name, 'measurement_value']}
                  rules={[{ required: true, message: requiredField }]}>
                  <Select style={{ width: 130 }}>
                    {measurementValues.map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}>
                Добавить ингредиент
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isEditRecipePage ? 'Редактировать' : 'Создать'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ManageRecipeForm;
