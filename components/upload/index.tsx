import Upload from './Upload';
import Dragger from './Dragger';
import UploadList from './UploadList';

export { UploadProps, UploadListProps, UploadChangeParam } from './interface';
export { DraggerProps } from './Dragger';

Upload.Dragger = Dragger;
Upload.UploadList = UploadList;
export default Upload;
