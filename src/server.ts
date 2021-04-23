import { http } from './http';
import './websocket/client';
import './websocket/admin';

http.listen(3333, () => console.log('Server started on 3333'));
