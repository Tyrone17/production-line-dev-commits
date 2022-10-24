import React, { useState, useEffect } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/lib/upload/style/index.less'

export interface FormUploadProps {
  initFileList?: any[];
  limit?: number;
  onChange?: (values: any[]) => void;
  [key: string]: any;
}

const FormUpload: React.FC<FormUploadProps> = (props) => {
  const {
    initFileList = [],
    limit = Infinity,
    onChange,
    ...otherProps
  } = props;

  // 组件是否已经卸载
  let isUnMounted = false
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [previewTitle, setPreviewTitle] = useState<string>('');
  const [fileList, setFileList] = useState(initFileList);

  const uploadProps = {
    name: 'files',
    fileList,
    // listType: 'picture-card',
    action: '/admin/upload/uploadImage',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
    },
    onChange: ({ file, fileList }: any) => {
      fileList = fileList.map((file: any) => {
        if (file.xhr && file.xhr.status === 200) {
          const response = JSON.parse(file.xhr.response);
          file.url = response.data && response.data[0];
        }
        return file;
      });
      !isUnMounted && setFileList(fileList);
      if (['done', 'removed'].includes(file.status)) {
        onChange && onChange(fileList);
      }
    },
    onPreview: async (file: any) => {
      if (!file.url && !file.preview) {
        const preview = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
        if (typeof preview === 'string') {
          file.preview = preview;
        }
      }
      if (!isUnMounted) {
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
      }
    },
    ...otherProps
  }

  useEffect(() => {
    !isUnMounted && setFileList(initFileList)
    return () => {
      isUnMounted = true
    }
  }, [initFileList])

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">上传</div>
    </div>
  );
  return (
    <div className="clearfix">
      <Upload {...uploadProps}>
        {fileList.length >= limit ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={() => !isUnMounted && setPreviewVisible(false)}
      >
        <img style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default FormUpload;
