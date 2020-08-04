import { Component } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'nz-demo-tree-search',
  template: `
    <nz-input-group [nzSuffix]="suffixIcon">
      <input type="text" nz-input placeholder="Search" [(ngModel)]="searchValue" />
    </nz-input-group>
    <ng-template #suffixIcon>
      <i nz-icon nzType="search"></i>
    </ng-template>
    <nz-tree
      [nzData]="nodes"
      [nzSearchValue]="searchValue"
      (nzClick)="nzEvent($event)"
      (nzExpandChange)="nzEvent($event)"
      (nzSearchValueChange)="nzEvent($event)"
    >
    </nz-tree>
  `,
  styles: [
    `
      nz-input-group {
        margin-bottom: 12px;
      }
    `
  ]
})
export class NzDemoTreeSearchComponent {
  searchValue = '';

  nodes =  [
    {
      "title": "交易银行产品（不能动）",
      "key": "93f623ed-9709-4bfc-9045-ee39549df4b5",
      "value": "93f623ed-9709-4bfc-9045-ee39549df4b5\\|\u001c交易银行产品（不能动）",
      "children": [
        {
          "title": "跨境金融",
          "key": "92cdbea6-667b-4db3-abd0-d2d12d6a75a1",
          "value": "92cdbea6-667b-4db3-abd0-d2d12d6a75a1\\|\u001c跨境金融",
          "children": [
            {
              "title": "聚合收款",
              "key": "0a71a711-75cc-4c15-9398-8fa1a1742c6b",
              "value": "0a71a711-75cc-4c15-9398-8fa1a1742c6b\\|\u001c聚合收款",
              "children": [
                {
                  "title": "制度",
                  "key": "c80d8fb9-7f45-46b2-b4da-fa0d0b903c12",
                  "value": "c80d8fb9-7f45-46b2-b4da-fa0d0b903c12\\|\u001c制度",
                  "children": [
                    {
                      "title": "外规",
                      "key": "c77d346b-3bb0-4380-89f0-1fdffb34a97f",
                      "value": "c77d346b-3bb0-4380-89f0-1fdffb34a97f\\|\u001c外规",
                      "children": null,
                      "parentId": "c80d8fb9-7f45-46b2-b4da-fa0d0b903c12",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    },
                    {
                      "title": "行内制度",
                      "key": "d8339c8c-b268-4dee-8fc7-8e6b2fef3255",
                      "value": "d8339c8c-b268-4dee-8fc7-8e6b2fef3255\\|\u001c行内制度",
                      "children": [
                        {
                          "title": "业务流程",
                          "key": "83fe4d34-dbab-4c23-871c-4ae5f2c79a00",
                          "value": "83fe4d34-dbab-4c23-871c-4ae5f2c79a00\\|\u001c业务流程",
                          "children": null,
                          "parentId": "d8339c8c-b268-4dee-8fc7-8e6b2fef3255",
                          "maskAsProduct": false,
                          "isLeaf": true,
                          "selected": null,
                          "writable": true
                        }
                      ],
                      "parentId": "c80d8fb9-7f45-46b2-b4da-fa0d0b903c12",
                      "maskAsProduct": false,
                      "isLeaf": false,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "0a71a711-75cc-4c15-9398-8fa1a1742c6b",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "目标客群服务方案模板",
                  "key": "28d07b20-739c-4124-b93b-613c4aca2d5f",
                  "value": "28d07b20-739c-4124-b93b-613c4aca2d5f\\|\u001c目标客群服务方案模板",
                  "children": null,
                  "parentId": "0a71a711-75cc-4c15-9398-8fa1a1742c6b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "系统操作",
                  "key": "07b0e5af-fb89-4273-b13b-af5e8cc73956",
                  "value": "07b0e5af-fb89-4273-b13b-af5e8cc73956\\|\u001c系统操作",
                  "children": [
                    {
                      "title": "系统操作手册",
                      "key": "812941b8-3778-4b56-baac-5911d700a3c6",
                      "value": "812941b8-3778-4b56-baac-5911d700a3c6\\|\u001c系统操作手册",
                      "children": null,
                      "parentId": "07b0e5af-fb89-4273-b13b-af5e8cc73956",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "0a71a711-75cc-4c15-9398-8fa1a1742c6b",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "合同文本",
                  "key": "4a25cb3a-4c4d-48e2-bd69-590006e3e88c",
                  "value": "4a25cb3a-4c4d-48e2-bd69-590006e3e88c\\|\u001c合同文本",
                  "children": null,
                  "parentId": "0a71a711-75cc-4c15-9398-8fa1a1742c6b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "产品手册",
                  "key": "a5b13f99-2d3b-4ad1-bf9d-23fa8b3b150d",
                  "value": "a5b13f99-2d3b-4ad1-bf9d-23fa8b3b150d\\|\u001c产品手册",
                  "children": null,
                  "parentId": "0a71a711-75cc-4c15-9398-8fa1a1742c6b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "对客说明书",
                  "key": "c831ce77-786b-44f7-9b3c-aff1eae646c8",
                  "value": "c831ce77-786b-44f7-9b3c-aff1eae646c8\\|\u001c对客说明书",
                  "children": null,
                  "parentId": "0a71a711-75cc-4c15-9398-8fa1a1742c6b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "培训材料",
                  "key": "cd2b5f0f-8a92-42c7-92ba-003aa02b9a14",
                  "value": "cd2b5f0f-8a92-42c7-92ba-003aa02b9a14\\|\u001c培训材料",
                  "children": [
                    {
                      "title": "技术",
                      "key": "b1dda036-55e1-4a6b-99c9-2ae854b8df93",
                      "value": "b1dda036-55e1-4a6b-99c9-2ae854b8df93\\|\u001c技术",
                      "children": null,
                      "parentId": "cd2b5f0f-8a92-42c7-92ba-003aa02b9a14",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "0a71a711-75cc-4c15-9398-8fa1a1742c6b",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "QA",
                  "key": "2a0da574-a8be-46e0-a29e-8ed9d653f088",
                  "value": "2a0da574-a8be-46e0-a29e-8ed9d653f088\\|\u001cQA",
                  "children": null,
                  "parentId": "0a71a711-75cc-4c15-9398-8fa1a1742c6b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "92cdbea6-667b-4db3-abd0-d2d12d6a75a1",
              "maskAsProduct": true,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "金融",
              "key": "ac00f7c4-878a-45d2-a6b2-b6d607a007ef",
              "value": "ac00f7c4-878a-45d2-a6b2-b6d607a007ef\\|\u001c金融",
              "children": null,
              "parentId": "92cdbea6-667b-4db3-abd0-d2d12d6a75a1",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "dfdgreg",
              "key": "150ac4b7-f3b5-4e40-b4ef-19e135c4d65e",
              "value": "150ac4b7-f3b5-4e40-b4ef-19e135c4d65e\\|\u001cdfdgreg",
              "children": null,
              "parentId": "92cdbea6-667b-4db3-abd0-d2d12d6a75a1",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "fsdwe2",
              "key": "99b6982b-b436-4d05-86ec-3c029cd19c21",
              "value": "99b6982b-b436-4d05-86ec-3c029cd19c21\\|\u001cfsdwe2",
              "children": null,
              "parentId": "92cdbea6-667b-4db3-abd0-d2d12d6a75a1",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "93f623ed-9709-4bfc-9045-ee39549df4b5",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "fsdfefs",
          "key": "84d70b43-c5cf-4ee9-98b5-6e3ec6441314",
          "value": "84d70b43-c5cf-4ee9-98b5-6e3ec6441314\\|\u001cfsdfefs",
          "children": null,
          "parentId": "93f623ed-9709-4bfc-9045-ee39549df4b5",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "fdasf",
          "key": "acd012f2-8862-455f-ac15-b3269a75e485",
          "value": "acd012f2-8862-455f-ac15-b3269a75e485\\|\u001cfdasf",
          "children": null,
          "parentId": "93f623ed-9709-4bfc-9045-ee39549df4b5",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "fdsfesdf",
          "key": "0337fc4f-c683-4634-b1e3-bc4780c44a8f",
          "value": "0337fc4f-c683-4634-b1e3-bc4780c44a8f\\|\u001cfdsfesdf",
          "children": null,
          "parentId": "93f623ed-9709-4bfc-9045-ee39549df4b5",
          "maskAsProduct": true,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "fdsfdsf",
          "key": "76d624f0-effe-4c66-b4e5-3b2c2b78f076",
          "value": "76d624f0-effe-4c66-b4e5-3b2c2b78f076\\|\u001cfdsfdsf",
          "children": null,
          "parentId": "93f623ed-9709-4bfc-9045-ee39549df4b5",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "产品大事件",
          "key": "9dbdc70a-9cdd-481e-b77f-d8d00c20d66e",
          "value": "9dbdc70a-9cdd-481e-b77f-d8d00c20d66e\\|\u001c产品大事件",
          "children": [
            {
              "title": "fsdfdsfsdfsd",
              "key": "367ac796-9d93-4865-b6bc-4c07cae82c3f",
              "value": "367ac796-9d93-4865-b6bc-4c07cae82c3f\\|\u001cfsdfdsfsdfsd",
              "children": null,
              "parentId": "9dbdc70a-9cdd-481e-b77f-d8d00c20d66e",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "93f623ed-9709-4bfc-9045-ee39549df4b5",
          "maskAsProduct": true,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "产品负责人",
          "key": "eca2a593-d517-4b7c-93bf-20b5a969ef02",
          "value": "eca2a593-d517-4b7c-93bf-20b5a969ef02\\|\u001c产品负责人",
          "children": null,
          "parentId": "93f623ed-9709-4bfc-9045-ee39549df4b5",
          "maskAsProduct": true,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "小蛋壳(不能动)",
          "key": "8c021fa4-4baf-464a-a867-604feb1dfbad",
          "value": "8c021fa4-4baf-464a-a867-604feb1dfbad\\|\u001c小蛋壳(不能动)",
          "children": null,
          "parentId": "93f623ed-9709-4bfc-9045-ee39549df4b5",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "ST",
          "key": "218a77a0-7676-4e91-88c4-a16613bb8af5",
          "value": "218a77a0-7676-4e91-88c4-a16613bb8af5\\|\u001cST",
          "children": null,
          "parentId": "93f623ed-9709-4bfc-9045-ee39549df4b5",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "发送的",
          "key": "92bc645d-f978-48f7-abdf-b757837d4f14",
          "value": "92bc645d-f978-48f7-abdf-b757837d4f14\\|\u001c发送的",
          "children": null,
          "parentId": "93f623ed-9709-4bfc-9045-ee39549df4b5",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "监管法规（不能动）",
      "key": "5b6e1e23-16b3-46bf-b25e-74d88c289147",
      "value": "5b6e1e23-16b3-46bf-b25e-74d88c289147\\|\u001c监管法规（不能动）",
      "children": [
        {
          "title": "监管法规",
          "key": "df3d9cf5-114f-486e-96fa-ecf4359f9e62",
          "value": "df3d9cf5-114f-486e-96fa-ecf4359f9e62\\|\u001c监管法规",
          "children": null,
          "parentId": "5b6e1e23-16b3-46bf-b25e-74d88c289147",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "监管法律",
          "key": "5e792277-e21e-4133-9a25-1cf7e44a76c0",
          "value": "5e792277-e21e-4133-9a25-1cf7e44a76c0\\|\u001c监管法律",
          "children": null,
          "parentId": "5b6e1e23-16b3-46bf-b25e-74d88c289147",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "ST",
      "key": "eaeb9b29-b7ac-4db3-b68c-c0a97086b90d",
      "value": "eaeb9b29-b7ac-4db3-b68c-c0a97086b90d\\|\u001cST",
      "children": [
        {
          "title": "拆解测试",
          "key": "5694d585-5f6f-4370-8cdd-149e419d84ad",
          "value": "5694d585-5f6f-4370-8cdd-149e419d84ad\\|\u001c拆解测试",
          "children": [
            {
              "title": "付款代理",
              "key": "ad8f563c-5069-4184-a7a2-f7de7abb784e",
              "value": "ad8f563c-5069-4184-a7a2-f7de7abb784e\\|\u001c付款代理",
              "children": [
                {
                  "title": "制度",
                  "key": "f5059fc1-7b2e-449f-af0b-c123e16b1871",
                  "value": "f5059fc1-7b2e-449f-af0b-c123e16b1871\\|\u001c制度",
                  "children": null,
                  "parentId": "ad8f563c-5069-4184-a7a2-f7de7abb784e",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "系统操作",
                  "key": "532196c5-5190-4df9-b9bf-0ee1491eabb0",
                  "value": "532196c5-5190-4df9-b9bf-0ee1491eabb0\\|\u001c系统操作",
                  "children": null,
                  "parentId": "ad8f563c-5069-4184-a7a2-f7de7abb784e",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "5694d585-5f6f-4370-8cdd-149e419d84ad",
              "maskAsProduct": true,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "集团网银",
              "key": "085c7784-a8d0-4ef4-b600-27581d9ba86d",
              "value": "085c7784-a8d0-4ef4-b600-27581d9ba86d\\|\u001c集团网银",
              "children": [
                {
                  "title": "制度",
                  "key": "b56e23ae-98ba-4742-95b3-df9c3083bfc2",
                  "value": "b56e23ae-98ba-4742-95b3-df9c3083bfc2\\|\u001c制度",
                  "children": null,
                  "parentId": "085c7784-a8d0-4ef4-b600-27581d9ba86d",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "QA",
                  "key": "1c1a9fef-e1be-44ea-82c7-b194381e4606",
                  "value": "1c1a9fef-e1be-44ea-82c7-b194381e4606\\|\u001cQA",
                  "children": null,
                  "parentId": "085c7784-a8d0-4ef4-b600-27581d9ba86d",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "5694d585-5f6f-4370-8cdd-149e419d84ad",
              "maskAsProduct": true,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "网上代发",
              "key": "10faf668-beb8-4625-8d7b-d7f129b10526",
              "value": "10faf668-beb8-4625-8d7b-d7f129b10526\\|\u001c网上代发",
              "children": [
                {
                  "title": "制度",
                  "key": "4e18983d-7ed0-4c22-add7-2ea9cac796b0",
                  "value": "4e18983d-7ed0-4c22-add7-2ea9cac796b0\\|\u001c制度",
                  "children": null,
                  "parentId": "10faf668-beb8-4625-8d7b-d7f129b10526",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "目标客群服务方案模板",
                  "key": "67a51b9f-233b-4391-8273-29d866436c71",
                  "value": "67a51b9f-233b-4391-8273-29d866436c71\\|\u001c目标客群服务方案模板",
                  "children": null,
                  "parentId": "10faf668-beb8-4625-8d7b-d7f129b10526",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "5694d585-5f6f-4370-8cdd-149e419d84ad",
              "maskAsProduct": true,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "网银互联",
              "key": "ba82bc7d-5222-4cce-a040-b90bd483ffe3",
              "value": "ba82bc7d-5222-4cce-a040-b90bd483ffe3\\|\u001c网银互联",
              "children": [
                {
                  "title": "制度",
                  "key": "38c615eb-530a-48de-b5a3-d9ffd8ca185f",
                  "value": "38c615eb-530a-48de-b5a3-d9ffd8ca185f\\|\u001c制度",
                  "children": null,
                  "parentId": "ba82bc7d-5222-4cce-a040-b90bd483ffe3",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "5694d585-5f6f-4370-8cdd-149e419d84ad",
              "maskAsProduct": true,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "ppt测试",
              "key": "8096e34b-235f-4f4e-9676-2b593f30936f",
              "value": "8096e34b-235f-4f4e-9676-2b593f30936f\\|\u001cppt测试",
              "children": null,
              "parentId": "5694d585-5f6f-4370-8cdd-149e419d84ad",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "拆解子目录5555",
              "key": "f686c1b8-8f36-4aec-98bc-7e293b804271",
              "value": "f686c1b8-8f36-4aec-98bc-7e293b804271\\|\u001c拆解子目录5555",
              "children": null,
              "parentId": "5694d585-5f6f-4370-8cdd-149e419d84ad",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "eaeb9b29-b7ac-4db3-b68c-c0a97086b90d",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "聚合收款",
          "key": "6ab146bb-ad56-45dc-aa73-e74c39697b21",
          "value": "6ab146bb-ad56-45dc-aa73-e74c39697b21\\|\u001c聚合收款",
          "children": null,
          "parentId": "eaeb9b29-b7ac-4db3-b68c-c0a97086b90d",
          "maskAsProduct": true,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "XCS",
          "key": "5b94aed1-8211-4ac1-b5dd-5a47cba18f29",
          "value": "5b94aed1-8211-4ac1-b5dd-5a47cba18f29\\|\u001cXCS",
          "children": null,
          "parentId": "eaeb9b29-b7ac-4db3-b68c-c0a97086b90d",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "新建根目录",
          "key": "45829b57-11b6-4710-90f7-d22a1c3081a1",
          "value": "45829b57-11b6-4710-90f7-d22a1c3081a1\\|\u001c新建根目录",
          "children": null,
          "parentId": "eaeb9b29-b7ac-4db3-b68c-c0a97086b90d",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "aspose测试",
      "key": "aceca3e5-9cf2-4c1f-afb4-3fa2a583c34a",
      "value": "aceca3e5-9cf2-4c1f-afb4-3fa2a583c34a\\|\u001caspose测试",
      "children": [
        {
          "title": "word",
          "key": "73db304d-8c19-4774-a62b-9d943a7957eb",
          "value": "73db304d-8c19-4774-a62b-9d943a7957eb\\|\u001cword",
          "children": [
            {
              "title": "20191128",
              "key": "7c478aad-9c09-41a1-b911-0de26dea26bd",
              "value": "7c478aad-9c09-41a1-b911-0de26dea26bd\\|\u001c20191128",
              "children": null,
              "parentId": "73db304d-8c19-4774-a62b-9d943a7957eb",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "aceca3e5-9cf2-4c1f-afb4-3fa2a583c34a",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "ppt",
          "key": "2f9426a3-32dc-41ed-a273-2f09768eca9d",
          "value": "2f9426a3-32dc-41ed-a273-2f09768eca9d\\|\u001cppt",
          "children": [
            {
              "title": "20191128",
              "key": "36c39b2b-b423-439b-bffa-8211eab95690",
              "value": "36c39b2b-b423-439b-bffa-8211eab95690\\|\u001c20191128",
              "children": null,
              "parentId": "2f9426a3-32dc-41ed-a273-2f09768eca9d",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "aceca3e5-9cf2-4c1f-afb4-3fa2a583c34a",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "小蛋壳(不能动）",
      "key": "53274426-d07b-43ad-8465-f63c555da739",
      "value": "53274426-d07b-43ad-8465-f63c555da739\\|\u001c小蛋壳(不能动）",
      "children": [
        {
          "title": "现金管理",
          "key": "4ec3140f-72f4-456e-9dad-eae653143a88",
          "value": "4ec3140f-72f4-456e-9dad-eae653143a88\\|\u001c现金管理",
          "children": [
            {
              "title": "虚拟现金池",
              "key": "f4ddb77c-a4de-462a-bb4b-2bfc8c3ce6c1",
              "value": "f4ddb77c-a4de-462a-bb4b-2bfc8c3ce6c1\\|\u001c虚拟现金池",
              "children": [
                {
                  "title": "制度",
                  "key": "abf31070-be03-41b8-8949-b063b0284f6c",
                  "value": "abf31070-be03-41b8-8949-b063b0284f6c\\|\u001c制度",
                  "children": null,
                  "parentId": "f4ddb77c-a4de-462a-bb4b-2bfc8c3ce6c1",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "目标客群服务方案模板",
                  "key": "4cd7a5a6-624e-4a89-8026-cee310361c26",
                  "value": "4cd7a5a6-624e-4a89-8026-cee310361c26\\|\u001c目标客群服务方案模板",
                  "children": null,
                  "parentId": "f4ddb77c-a4de-462a-bb4b-2bfc8c3ce6c1",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "法律文本（合同等）、产品手册、对客说明书、培训材料",
                  "key": "1c47def6-5eb7-4717-8544-814ea68418eb",
                  "value": "1c47def6-5eb7-4717-8544-814ea68418eb\\|\u001c法律文本（合同等）、产品手册、对客说明书、培训材料",
                  "children": null,
                  "parentId": "f4ddb77c-a4de-462a-bb4b-2bfc8c3ce6c1",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "业务流程",
                  "key": "74cde6f4-67bd-41e4-b19d-b800530eb2da",
                  "value": "74cde6f4-67bd-41e4-b19d-b800530eb2da\\|\u001c业务流程",
                  "children": null,
                  "parentId": "f4ddb77c-a4de-462a-bb4b-2bfc8c3ce6c1",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "系统操作",
                  "key": "4d0809d5-64d2-42c8-aa9b-2994080e252f",
                  "value": "4d0809d5-64d2-42c8-aa9b-2994080e252f\\|\u001c系统操作",
                  "children": null,
                  "parentId": "f4ddb77c-a4de-462a-bb4b-2bfc8c3ce6c1",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "Q&A",
                  "key": "65050ac2-2f02-47d2-ace7-110cc5b98ab2",
                  "value": "65050ac2-2f02-47d2-ace7-110cc5b98ab2\\|\u001cQ&A",
                  "children": [
                    {
                      "title": "讨论Q&A",
                      "key": "fd7d473b-5122-478a-8e10-471444194414",
                      "value": "fd7d473b-5122-478a-8e10-471444194414\\|\u001c讨论Q&A",
                      "children": null,
                      "parentId": "65050ac2-2f02-47d2-ace7-110cc5b98ab2",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "f4ddb77c-a4de-462a-bb4b-2bfc8c3ce6c1",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "QA",
                  "key": "25d646c7-0c45-40ea-8ecc-1b0d0f6e420b",
                  "value": "25d646c7-0c45-40ea-8ecc-1b0d0f6e420b\\|\u001cQA",
                  "children": null,
                  "parentId": "f4ddb77c-a4de-462a-bb4b-2bfc8c3ce6c1",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "4ec3140f-72f4-456e-9dad-eae653143a88",
              "maskAsProduct": true,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "对公智能通知存款",
              "key": "b015bea2-8ddf-43a7-9c0e-88bb5206cd9b",
              "value": "b015bea2-8ddf-43a7-9c0e-88bb5206cd9b\\|\u001c对公智能通知存款",
              "children": [
                {
                  "title": "制度",
                  "key": "1be1a4e9-27e1-4f0a-b502-7c22f8cb22b8",
                  "value": "1be1a4e9-27e1-4f0a-b502-7c22f8cb22b8\\|\u001c制度",
                  "children": null,
                  "parentId": "b015bea2-8ddf-43a7-9c0e-88bb5206cd9b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "目标客群服务方案模板",
                  "key": "4d8e0e9f-4fe1-43c6-b2d4-d7482b2d89e9",
                  "value": "4d8e0e9f-4fe1-43c6-b2d4-d7482b2d89e9\\|\u001c目标客群服务方案模板",
                  "children": null,
                  "parentId": "b015bea2-8ddf-43a7-9c0e-88bb5206cd9b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "法律文本（合同等）、产品手册、对客说明书、培训材料",
                  "key": "0eefbb1a-c42f-4987-ae51-ec11b290eee1",
                  "value": "0eefbb1a-c42f-4987-ae51-ec11b290eee1\\|\u001c法律文本（合同等）、产品手册、对客说明书、培训材料",
                  "children": null,
                  "parentId": "b015bea2-8ddf-43a7-9c0e-88bb5206cd9b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "业务流程",
                  "key": "9ebb9a28-6a95-408d-9e04-42aefb1a645b",
                  "value": "9ebb9a28-6a95-408d-9e04-42aefb1a645b\\|\u001c业务流程",
                  "children": null,
                  "parentId": "b015bea2-8ddf-43a7-9c0e-88bb5206cd9b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "系统操作",
                  "key": "d063be9a-a390-4706-98f9-b2fda4f30a0d",
                  "value": "d063be9a-a390-4706-98f9-b2fda4f30a0d\\|\u001c系统操作",
                  "children": null,
                  "parentId": "b015bea2-8ddf-43a7-9c0e-88bb5206cd9b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "4ec3140f-72f4-456e-9dad-eae653143a88",
              "maskAsProduct": true,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "对公智能定期存款",
              "key": "fc1669e8-6798-42ed-a5a5-669b9b4915ed",
              "value": "fc1669e8-6798-42ed-a5a5-669b9b4915ed\\|\u001c对公智能定期存款",
              "children": [
                {
                  "title": "制度",
                  "key": "2d1ed95a-6cc2-4b95-b7b2-1969636b7835",
                  "value": "2d1ed95a-6cc2-4b95-b7b2-1969636b7835\\|\u001c制度",
                  "children": null,
                  "parentId": "fc1669e8-6798-42ed-a5a5-669b9b4915ed",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "目标客群服务方案模板",
                  "key": "a8333f3f-363c-4a5c-a1c0-53a2cab6675d",
                  "value": "a8333f3f-363c-4a5c-a1c0-53a2cab6675d\\|\u001c目标客群服务方案模板",
                  "children": null,
                  "parentId": "fc1669e8-6798-42ed-a5a5-669b9b4915ed",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "法律文本（合同等）、产品手册、对客说明书、培训材料",
                  "key": "21e9b61c-f4a2-4d4d-a707-b27ebf03a2ff",
                  "value": "21e9b61c-f4a2-4d4d-a707-b27ebf03a2ff\\|\u001c法律文本（合同等）、产品手册、对客说明书、培训材料",
                  "children": null,
                  "parentId": "fc1669e8-6798-42ed-a5a5-669b9b4915ed",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "业务流程",
                  "key": "892feabd-256b-4a6f-ba78-a0d7a9461c6e",
                  "value": "892feabd-256b-4a6f-ba78-a0d7a9461c6e\\|\u001c业务流程",
                  "children": null,
                  "parentId": "fc1669e8-6798-42ed-a5a5-669b9b4915ed",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "系统操作",
                  "key": "255d78b2-ac0c-4813-9476-2969b30ad8fa",
                  "value": "255d78b2-ac0c-4813-9476-2969b30ad8fa\\|\u001c系统操作",
                  "children": null,
                  "parentId": "fc1669e8-6798-42ed-a5a5-669b9b4915ed",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "新增测试文档",
                  "key": "71c1b2f5-60d1-4bcd-aaa3-4a66b7983c59",
                  "value": "71c1b2f5-60d1-4bcd-aaa3-4a66b7983c59\\|\u001c新增测试文档",
                  "children": null,
                  "parentId": "fc1669e8-6798-42ed-a5a5-669b9b4915ed",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "QA",
                  "key": "77c74c4a-2c7b-4c7a-b4e7-e5e9a98a020e",
                  "value": "77c74c4a-2c7b-4c7a-b4e7-e5e9a98a020e\\|\u001cQA",
                  "children": null,
                  "parentId": "fc1669e8-6798-42ed-a5a5-669b9b4915ed",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "4ec3140f-72f4-456e-9dad-eae653143a88",
              "maskAsProduct": true,
              "isLeaf": false,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "53274426-d07b-43ad-8465-f63c555da739",
          "maskAsProduct": true,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "QA",
          "key": "59697cdd-785d-4928-9979-69493add5054",
          "value": "59697cdd-785d-4928-9979-69493add5054\\|\u001cQA",
          "children": [
            {
              "title": "qa子目录",
              "key": "40c4eefd-36bc-4885-94e3-9fe098834b26",
              "value": "40c4eefd-36bc-4885-94e3-9fe098834b26\\|\u001cqa子目录",
              "children": null,
              "parentId": "59697cdd-785d-4928-9979-69493add5054",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "53274426-d07b-43ad-8465-f63c555da739",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "杭州分行",
      "key": "aa94a6c3-9b3b-446b-92d1-7545728adc53",
      "value": "aa94a6c3-9b3b-446b-92d1-7545728adc53\\|\u001c杭州分行",
      "children": [
        {
          "title": "国内贸易",
          "key": "fada3645-bd67-4cbb-a5eb-ebb85cb11317",
          "value": "fada3645-bd67-4cbb-a5eb-ebb85cb11317\\|\u001c国内贸易",
          "children": [
            {
              "title": "付款代理",
              "key": "ab3bf4bf-2c78-4771-bab2-751ea0977b30",
              "value": "ab3bf4bf-2c78-4771-bab2-751ea0977b30\\|\u001c付款代理",
              "children": [
                {
                  "title": "制度",
                  "key": "4a9c315c-2eaf-488e-8fc1-b232aeab34dc",
                  "value": "4a9c315c-2eaf-488e-8fc1-b232aeab34dc\\|\u001c制度",
                  "children": [
                    {
                      "title": "行内制度3",
                      "key": "09bc7c73-db98-45e1-a107-7bf1551ba974",
                      "value": "09bc7c73-db98-45e1-a107-7bf1551ba974\\|\u001c行内制度3",
                      "children": null,
                      "parentId": "4a9c315c-2eaf-488e-8fc1-b232aeab34dc",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    },
                    {
                      "title": "外规",
                      "key": "f1da4caa-4d05-49a4-9dcf-cce5cdd327f4",
                      "value": "f1da4caa-4d05-49a4-9dcf-cce5cdd327f4\\|\u001c外规",
                      "children": null,
                      "parentId": "4a9c315c-2eaf-488e-8fc1-b232aeab34dc",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "ab3bf4bf-2c78-4771-bab2-751ea0977b30",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "目录客群服务方案模板",
                  "key": "c9a22200-cf84-490b-ae93-54e37b9f4221",
                  "value": "c9a22200-cf84-490b-ae93-54e37b9f4221\\|\u001c目录客群服务方案模板",
                  "children": null,
                  "parentId": "ab3bf4bf-2c78-4771-bab2-751ea0977b30",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "业务流程",
                  "key": "0771b185-a6c8-4763-9a30-b590e44353b5",
                  "value": "0771b185-a6c8-4763-9a30-b590e44353b5\\|\u001c业务流程",
                  "children": [
                    {
                      "title": "业务流程",
                      "key": "cd53edc0-38f4-4275-b114-0c75696cd1f5",
                      "value": "cd53edc0-38f4-4275-b114-0c75696cd1f5\\|\u001c业务流程",
                      "children": null,
                      "parentId": "0771b185-a6c8-4763-9a30-b590e44353b5",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    },
                    {
                      "title": "流程优化方案",
                      "key": "ce3ac39e-683a-46db-a590-aed44215f7f7",
                      "value": "ce3ac39e-683a-46db-a590-aed44215f7f7\\|\u001c流程优化方案",
                      "children": null,
                      "parentId": "0771b185-a6c8-4763-9a30-b590e44353b5",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "ab3bf4bf-2c78-4771-bab2-751ea0977b30",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "系统操作",
                  "key": "c189e8f7-0f68-41b5-aed5-c5c75a0e12bc",
                  "value": "c189e8f7-0f68-41b5-aed5-c5c75a0e12bc\\|\u001c系统操作",
                  "children": [
                    {
                      "title": "系统优化需求",
                      "key": "15cfd85a-b8ed-4d64-bc72-ba3a2f043ae6",
                      "value": "15cfd85a-b8ed-4d64-bc72-ba3a2f043ae6\\|\u001c系统优化需求",
                      "children": null,
                      "parentId": "c189e8f7-0f68-41b5-aed5-c5c75a0e12bc",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    },
                    {
                      "title": "系统操作手册",
                      "key": "c9714fbc-e2d0-4431-98e3-db33ee69fd9b",
                      "value": "c9714fbc-e2d0-4431-98e3-db33ee69fd9b\\|\u001c系统操作手册",
                      "children": null,
                      "parentId": "c189e8f7-0f68-41b5-aed5-c5c75a0e12bc",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "ab3bf4bf-2c78-4771-bab2-751ea0977b30",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "合同文本",
                  "key": "157fdd2f-0aed-40a4-915e-465693d87a24",
                  "value": "157fdd2f-0aed-40a4-915e-465693d87a24\\|\u001c合同文本",
                  "children": null,
                  "parentId": "ab3bf4bf-2c78-4771-bab2-751ea0977b30",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "产品手册",
                  "key": "285a4ba9-ff6e-4dfb-b54a-f50ea5bde72d",
                  "value": "285a4ba9-ff6e-4dfb-b54a-f50ea5bde72d\\|\u001c产品手册",
                  "children": null,
                  "parentId": "ab3bf4bf-2c78-4771-bab2-751ea0977b30",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "对客说明书",
                  "key": "b5af8321-73a7-48db-99fc-03368dca3e4f",
                  "value": "b5af8321-73a7-48db-99fc-03368dca3e4f\\|\u001c对客说明书",
                  "children": null,
                  "parentId": "ab3bf4bf-2c78-4771-bab2-751ea0977b30",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "培训材料",
                  "key": "5ef62224-7e80-4fc1-ba63-f1e16c901305",
                  "value": "5ef62224-7e80-4fc1-ba63-f1e16c901305\\|\u001c培训材料",
                  "children": null,
                  "parentId": "ab3bf4bf-2c78-4771-bab2-751ea0977b30",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "QA",
                  "key": "c727ef3c-0a13-4886-8f6e-914ba217decf",
                  "value": "c727ef3c-0a13-4886-8f6e-914ba217decf\\|\u001cQA",
                  "children": null,
                  "parentId": "ab3bf4bf-2c78-4771-bab2-751ea0977b30",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "fada3645-bd67-4cbb-a5eb-ebb85cb11317",
              "maskAsProduct": true,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "聚合收款",
              "key": "e26335dd-edb6-47d9-a888-a50a0225319e",
              "value": "e26335dd-edb6-47d9-a888-a50a0225319e\\|\u001c聚合收款",
              "children": null,
              "parentId": "fada3645-bd67-4cbb-a5eb-ebb85cb11317",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "aa94a6c3-9b3b-446b-92d1-7545728adc53",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "内保外贷",
          "key": "c0a5f9a8-b5cc-4957-9c2b-e726570e5274",
          "value": "c0a5f9a8-b5cc-4957-9c2b-e726570e5274\\|\u001c内保外贷",
          "children": [
            {
              "title": "制度",
              "key": "95e889ed-f9cf-42c3-a5bb-ea1a859d024f",
              "value": "95e889ed-f9cf-42c3-a5bb-ea1a859d024f\\|\u001c制度",
              "children": null,
              "parentId": "c0a5f9a8-b5cc-4957-9c2b-e726570e5274",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "目标客群服务方案模板",
              "key": "9a076ddb-4140-44c9-9807-a450267dbcac",
              "value": "9a076ddb-4140-44c9-9807-a450267dbcac\\|\u001c目标客群服务方案模板",
              "children": null,
              "parentId": "c0a5f9a8-b5cc-4957-9c2b-e726570e5274",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "法律文本（合同等）、产品手册、对客说明书、培训材料",
              "key": "3ed58e6b-2676-494b-b402-f34150b6ab1d",
              "value": "3ed58e6b-2676-494b-b402-f34150b6ab1d\\|\u001c法律文本（合同等）、产品手册、对客说明书、培训材料",
              "children": null,
              "parentId": "c0a5f9a8-b5cc-4957-9c2b-e726570e5274",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "业务流程",
              "key": "4ac5e96d-741a-4e4c-af46-4facb2fadc8a",
              "value": "4ac5e96d-741a-4e4c-af46-4facb2fadc8a\\|\u001c业务流程",
              "children": null,
              "parentId": "c0a5f9a8-b5cc-4957-9c2b-e726570e5274",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "系统操作",
              "key": "e745955c-0b8a-4066-9a62-c980b62ff9c7",
              "value": "e745955c-0b8a-4066-9a62-c980b62ff9c7\\|\u001c系统操作",
              "children": [
                {
                  "title": "test",
                  "key": "5bbe951b-a8db-4cdb-8b73-a63937f93f4a",
                  "value": "5bbe951b-a8db-4cdb-8b73-a63937f93f4a\\|\u001ctest",
                  "children": [
                    {
                      "title": "test1",
                      "key": "c98c618c-5a95-4b21-8492-b0a31c03e3df",
                      "value": "c98c618c-5a95-4b21-8492-b0a31c03e3df\\|\u001ctest1",
                      "children": null,
                      "parentId": "5bbe951b-a8db-4cdb-8b73-a63937f93f4a",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "e745955c-0b8a-4066-9a62-c980b62ff9c7",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "c0a5f9a8-b5cc-4957-9c2b-e726570e5274",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "aa94a6c3-9b3b-446b-92d1-7545728adc53",
          "maskAsProduct": true,
          "isLeaf": false,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "总行",
      "key": "edfabe9f-86b8-4218-9084-032fe1fce7a8",
      "value": "edfabe9f-86b8-4218-9084-032fe1fce7a8\\|\u001c总行",
      "children": [
        {
          "title": "外汇管理主要法规",
          "key": "957d95f7-a819-454f-843c-40bf8bd89d00",
          "value": "957d95f7-a819-454f-843c-40bf8bd89d00\\|\u001c外汇管理主要法规",
          "children": [
            {
              "title": "综合",
              "key": "e57fd601-82e0-4507-a4c5-aa0095b98214",
              "value": "e57fd601-82e0-4507-a4c5-aa0095b98214\\|\u001c综合",
              "children": [
                {
                  "title": "账户管理",
                  "key": "b781c33f-982c-42a7-983c-bd812f39ace1",
                  "value": "b781c33f-982c-42a7-983c-bd812f39ace1\\|\u001c账户管理",
                  "children": [
                    {
                      "title": "基本法规",
                      "key": "e6905267-c699-4d02-9abe-051f0e6bc11b",
                      "value": "e6905267-c699-4d02-9abe-051f0e6bc11b\\|\u001c基本法规",
                      "children": null,
                      "parentId": "b781c33f-982c-42a7-983c-bd812f39ace1",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "e57fd601-82e0-4507-a4c5-aa0095b98214",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "其他",
                  "key": "ad0746ed-b0e0-496e-b5d7-f74ed903d387",
                  "value": "ad0746ed-b0e0-496e-b5d7-f74ed903d387\\|\u001c其他",
                  "children": null,
                  "parentId": "e57fd601-82e0-4507-a4c5-aa0095b98214",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "957d95f7-a819-454f-843c-40bf8bd89d00",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "经常项目外汇管理",
              "key": "4d244066-029f-4260-b132-f2d8f6c3dbfc",
              "value": "4d244066-029f-4260-b132-f2d8f6c3dbfc\\|\u001c经常项目外汇管理",
              "children": [
                {
                  "title": "经常项目综合",
                  "key": "4863e824-2621-4dff-a292-aefebc788ab4",
                  "value": "4863e824-2621-4dff-a292-aefebc788ab4\\|\u001c经常项目综合",
                  "children": [
                    {
                      "title": "跨境人民币主要法规",
                      "key": "1145fe33-7148-46aa-81b8-adf38fdd861b",
                      "value": "1145fe33-7148-46aa-81b8-adf38fdd861b\\|\u001c跨境人民币主要法规",
                      "children": [
                        {
                          "title": "其他",
                          "key": "344b3c6d-f6ff-4d62-be11-799395431a29",
                          "value": "344b3c6d-f6ff-4d62-be11-799395431a29\\|\u001c其他",
                          "children": null,
                          "parentId": "1145fe33-7148-46aa-81b8-adf38fdd861b",
                          "maskAsProduct": false,
                          "isLeaf": true,
                          "selected": null,
                          "writable": true
                        },
                        {
                          "title": "综合",
                          "key": "dd152598-fb0d-472f-8b1d-f49f61d7eb44",
                          "value": "dd152598-fb0d-472f-8b1d-f49f61d7eb44\\|\u001c综合",
                          "children": null,
                          "parentId": "1145fe33-7148-46aa-81b8-adf38fdd861b",
                          "maskAsProduct": false,
                          "isLeaf": true,
                          "selected": null,
                          "writable": true
                        },
                        {
                          "title": "统计与报送",
                          "key": "9a6809d7-5fe6-4887-8aef-78388b10b1b7",
                          "value": "9a6809d7-5fe6-4887-8aef-78388b10b1b7\\|\u001c统计与报送",
                          "children": null,
                          "parentId": "1145fe33-7148-46aa-81b8-adf38fdd861b",
                          "maskAsProduct": false,
                          "isLeaf": true,
                          "selected": null,
                          "writable": true
                        },
                        {
                          "title": "资本项目",
                          "key": "c225db11-fc0c-4577-9b39-9a9e561b48b0",
                          "value": "c225db11-fc0c-4577-9b39-9a9e561b48b0\\|\u001c资本项目",
                          "children": null,
                          "parentId": "1145fe33-7148-46aa-81b8-adf38fdd861b",
                          "maskAsProduct": false,
                          "isLeaf": true,
                          "selected": null,
                          "writable": true
                        },
                        {
                          "title": "经常项目",
                          "key": "8a577a90-906d-453b-ac03-061792aa3ded",
                          "value": "8a577a90-906d-453b-ac03-061792aa3ded\\|\u001c经常项目",
                          "children": null,
                          "parentId": "1145fe33-7148-46aa-81b8-adf38fdd861b",
                          "maskAsProduct": false,
                          "isLeaf": true,
                          "selected": null,
                          "writable": true
                        }
                      ],
                      "parentId": "4863e824-2621-4dff-a292-aefebc788ab4",
                      "maskAsProduct": false,
                      "isLeaf": false,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "4d244066-029f-4260-b132-f2d8f6c3dbfc",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "货物贸易外汇管理",
                  "key": "37878f19-7504-4e03-9e6a-e7e3d66b0b7c",
                  "value": "37878f19-7504-4e03-9e6a-e7e3d66b0b7c\\|\u001c货物贸易外汇管理",
                  "children": null,
                  "parentId": "4d244066-029f-4260-b132-f2d8f6c3dbfc",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "服务贸易外汇管理",
                  "key": "55ab7b2c-4915-4af2-b985-612b0d0402ca",
                  "value": "55ab7b2c-4915-4af2-b985-612b0d0402ca\\|\u001c服务贸易外汇管理",
                  "children": null,
                  "parentId": "4d244066-029f-4260-b132-f2d8f6c3dbfc",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "外币现钞与外币计价管理",
                  "key": "b472ff69-2f04-439f-9d5b-858ba580295a",
                  "value": "b472ff69-2f04-439f-9d5b-858ba580295a\\|\u001c外币现钞与外币计价管理",
                  "children": null,
                  "parentId": "4d244066-029f-4260-b132-f2d8f6c3dbfc",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "957d95f7-a819-454f-843c-40bf8bd89d00",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "资本项目外汇管理",
              "key": "83139f44-badb-4a4e-aa09-965af20cf7f8",
              "value": "83139f44-badb-4a4e-aa09-965af20cf7f8\\|\u001c资本项目外汇管理",
              "children": [
                {
                  "title": "资本项目综合",
                  "key": "fb800dfb-380f-4a76-9f7e-ce8ffeccccd7",
                  "value": "fb800dfb-380f-4a76-9f7e-ce8ffeccccd7\\|\u001c资本项目综合",
                  "children": null,
                  "parentId": "83139f44-badb-4a4e-aa09-965af20cf7f8",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "外商直接投资外汇管理",
                  "key": "4f3d17e3-0130-4305-963a-26a639eadc04",
                  "value": "4f3d17e3-0130-4305-963a-26a639eadc04\\|\u001c外商直接投资外汇管理",
                  "children": null,
                  "parentId": "83139f44-badb-4a4e-aa09-965af20cf7f8",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "境外投资外汇管理",
                  "key": "5ff7b8ca-e261-4fb2-830a-e08bf112366c",
                  "value": "5ff7b8ca-e261-4fb2-830a-e08bf112366c\\|\u001c境外投资外汇管理",
                  "children": null,
                  "parentId": "83139f44-badb-4a4e-aa09-965af20cf7f8",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "境外融资及有价证券管理",
                  "key": "f0658135-7a5d-4d23-af55-4011a2634d1e",
                  "value": "f0658135-7a5d-4d23-af55-4011a2634d1e\\|\u001c境外融资及有价证券管理",
                  "children": [
                    {
                      "title": "境外发债及上市",
                      "key": "8e65d33d-dc18-4908-8200-193725c2f5ba",
                      "value": "8e65d33d-dc18-4908-8200-193725c2f5ba\\|\u001c境外发债及上市",
                      "children": null,
                      "parentId": "f0658135-7a5d-4d23-af55-4011a2634d1e",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    },
                    {
                      "title": "其他",
                      "key": "2ccc2598-631b-4ab1-8605-b855617ce674",
                      "value": "2ccc2598-631b-4ab1-8605-b855617ce674\\|\u001c其他",
                      "children": null,
                      "parentId": "f0658135-7a5d-4d23-af55-4011a2634d1e",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "83139f44-badb-4a4e-aa09-965af20cf7f8",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "外债及对外担保管理",
                  "key": "ab36e128-8516-4320-bd4f-b912f554072b",
                  "value": "ab36e128-8516-4320-bd4f-b912f554072b\\|\u001c外债及对外担保管理",
                  "children": [
                    {
                      "title": "基本法规",
                      "key": "f4a6795f-fb32-4224-b868-e57489651f6c",
                      "value": "f4a6795f-fb32-4224-b868-e57489651f6c\\|\u001c基本法规",
                      "children": null,
                      "parentId": "ab36e128-8516-4320-bd4f-b912f554072b",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    },
                    {
                      "title": "外债统计与管理",
                      "key": "24417766-285a-4e58-946c-b7dfaacaa3a3",
                      "value": "24417766-285a-4e58-946c-b7dfaacaa3a3\\|\u001c外债统计与管理",
                      "children": null,
                      "parentId": "ab36e128-8516-4320-bd4f-b912f554072b",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    },
                    {
                      "title": "担保",
                      "key": "d15e6bb5-e2f1-42f9-babe-310b7d9abec9",
                      "value": "d15e6bb5-e2f1-42f9-babe-310b7d9abec9\\|\u001c担保",
                      "children": null,
                      "parentId": "ab36e128-8516-4320-bd4f-b912f554072b",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    },
                    {
                      "title": "外汇贷款",
                      "key": "1f37385a-ed43-48c6-9939-723650c29bd1",
                      "value": "1f37385a-ed43-48c6-9939-723650c29bd1\\|\u001c外汇贷款",
                      "children": null,
                      "parentId": "ab36e128-8516-4320-bd4f-b912f554072b",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "83139f44-badb-4a4e-aa09-965af20cf7f8",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "957d95f7-a819-454f-843c-40bf8bd89d00",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "金融机构外汇业务监管",
              "key": "86eecd86-8b44-4bb2-8e41-c1e0eee7c04c",
              "value": "86eecd86-8b44-4bb2-8e41-c1e0eee7c04c\\|\u001c金融机构外汇业务监管",
              "children": [
                {
                  "title": "基本法规",
                  "key": "219442cb-3372-4938-95eb-f195bc54b05b",
                  "value": "219442cb-3372-4938-95eb-f195bc54b05b\\|\u001c基本法规",
                  "children": null,
                  "parentId": "86eecd86-8b44-4bb2-8e41-c1e0eee7c04c",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "银行结售汇业务",
                  "key": "4e141e29-82bb-47eb-b77f-a9c8e00765c3",
                  "value": "4e141e29-82bb-47eb-b77f-a9c8e00765c3\\|\u001c银行结售汇业务",
                  "children": null,
                  "parentId": "86eecd86-8b44-4bb2-8e41-c1e0eee7c04c",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "银行相关其他业务",
                  "key": "8438f6f5-cde4-41cf-966e-301dae9f6ccc",
                  "value": "8438f6f5-cde4-41cf-966e-301dae9f6ccc\\|\u001c银行相关其他业务",
                  "children": null,
                  "parentId": "86eecd86-8b44-4bb2-8e41-c1e0eee7c04c",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "保险公司",
                  "key": "b2cd7abf-bfe5-41e5-b9d3-0126c020dd98",
                  "value": "b2cd7abf-bfe5-41e5-b9d3-0126c020dd98\\|\u001c保险公司",
                  "children": null,
                  "parentId": "86eecd86-8b44-4bb2-8e41-c1e0eee7c04c",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "957d95f7-a819-454f-843c-40bf8bd89d00",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "国际收支与外汇统计",
              "key": "18cc1527-e4c4-4fa1-b459-66aaeffd6fb4",
              "value": "18cc1527-e4c4-4fa1-b459-66aaeffd6fb4\\|\u001c国际收支与外汇统计",
              "children": [
                {
                  "title": "国际收支统计综合法规",
                  "key": "5eb9fc12-69d2-4ff0-a0a9-5f1263ddfadd",
                  "value": "5eb9fc12-69d2-4ff0-a0a9-5f1263ddfadd\\|\u001c国际收支统计综合法规",
                  "children": null,
                  "parentId": "18cc1527-e4c4-4fa1-b459-66aaeffd6fb4",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "国际收支统计间接申报",
                  "key": "4f9c387a-ff69-4510-8ce0-cccf208edc3c",
                  "value": "4f9c387a-ff69-4510-8ce0-cccf208edc3c\\|\u001c国际收支统计间接申报",
                  "children": null,
                  "parentId": "18cc1527-e4c4-4fa1-b459-66aaeffd6fb4",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "国际收支统计直接申报",
                  "key": "9449e165-5056-4325-8f82-1b3630c8ef7d",
                  "value": "9449e165-5056-4325-8f82-1b3630c8ef7d\\|\u001c国际收支统计直接申报",
                  "children": null,
                  "parentId": "18cc1527-e4c4-4fa1-b459-66aaeffd6fb4",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "抽样调查制度",
                  "key": "a82cf467-90dc-4b13-95b9-7e199516e664",
                  "value": "a82cf467-90dc-4b13-95b9-7e199516e664\\|\u001c抽样调查制度",
                  "children": null,
                  "parentId": "18cc1527-e4c4-4fa1-b459-66aaeffd6fb4",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "957d95f7-a819-454f-843c-40bf8bd89d00",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "外汇检查与法规适用",
              "key": "0e7d9efa-5d2a-4a1c-a2cc-864cbb0a488b",
              "value": "0e7d9efa-5d2a-4a1c-a2cc-864cbb0a488b\\|\u001c外汇检查与法规适用",
              "children": [
                {
                  "title": "办案程序",
                  "key": "47306327-ece7-4074-bac4-5376f7dbc2e1",
                  "value": "47306327-ece7-4074-bac4-5376f7dbc2e1\\|\u001c办案程序",
                  "children": null,
                  "parentId": "0e7d9efa-5d2a-4a1c-a2cc-864cbb0a488b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "法律依据",
                  "key": "6dc28974-7494-4ff7-b890-d04a9130fbba",
                  "value": "6dc28974-7494-4ff7-b890-d04a9130fbba\\|\u001c法律依据",
                  "children": null,
                  "parentId": "0e7d9efa-5d2a-4a1c-a2cc-864cbb0a488b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "其他",
                  "key": "7785cbaf-6697-4193-8add-f92c618b4898",
                  "value": "7785cbaf-6697-4193-8add-f92c618b4898\\|\u001c其他",
                  "children": null,
                  "parentId": "0e7d9efa-5d2a-4a1c-a2cc-864cbb0a488b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "957d95f7-a819-454f-843c-40bf8bd89d00",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "外汇科技管理",
              "key": "747f0569-8c29-4c6d-a964-63739374aaa4",
              "value": "747f0569-8c29-4c6d-a964-63739374aaa4\\|\u001c外汇科技管理",
              "children": null,
              "parentId": "957d95f7-a819-454f-843c-40bf8bd89d00",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "test22233",
              "key": "c18627c9-9f89-42ba-9a88-bc0208dd0cd3",
              "value": "c18627c9-9f89-42ba-9a88-bc0208dd0cd3\\|\u001ctest22233",
              "children": null,
              "parentId": "957d95f7-a819-454f-843c-40bf8bd89d00",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "edfabe9f-86b8-4218-9084-032fe1fce7a8",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "tfgfghfhf",
          "key": "94ee99a0-1393-4423-bb4b-393cfaeb26fd",
          "value": "94ee99a0-1393-4423-bb4b-393cfaeb26fd\\|\u001ctfgfghfhf",
          "children": null,
          "parentId": "edfabe9f-86b8-4218-9084-032fe1fce7a8",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "啊手动阀",
      "key": "42e994d5-e628-4436-a704-13769fcd3b47",
      "value": "42e994d5-e628-4436-a704-13769fcd3b47\\|\u001c啊手动阀",
      "children": [
        {
          "title": "123123",
          "key": "7cfb9568-efff-414f-b7ed-0b1d89d35c95",
          "value": "7cfb9568-efff-414f-b7ed-0b1d89d35c95\\|\u001c123123",
          "children": null,
          "parentId": "42e994d5-e628-4436-a704-13769fcd3b47",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "MP4",
          "key": "bcf086e8-6efc-4550-a1e7-d34403048394",
          "value": "bcf086e8-6efc-4550-a1e7-d34403048394\\|\u001cMP4",
          "children": null,
          "parentId": "42e994d5-e628-4436-a704-13769fcd3b47",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "存储",
          "key": "55586345-39ac-4b59-9abf-d64281a05625",
          "value": "55586345-39ac-4b59-9abf-d64281a05625\\|\u001c存储",
          "children": null,
          "parentId": "42e994d5-e628-4436-a704-13769fcd3b47",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "undefined",
          "key": "50ca64ec-1a0d-43f0-8a22-a6399d66c948",
          "value": "50ca64ec-1a0d-43f0-8a22-a6399d66c948\\|\u001cundefined",
          "children": null,
          "parentId": "42e994d5-e628-4436-a704-13769fcd3b47",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "fsdfs",
          "key": "74707e79-e7a4-44af-806b-5b74e9b8339d",
          "value": "74707e79-e7a4-44af-806b-5b74e9b8339d\\|\u001cfsdfs",
          "children": null,
          "parentId": "42e994d5-e628-4436-a704-13769fcd3b47",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "业务123",
      "key": "60b19de4-e1cb-4cc7-bdd6-cedc99ef4097",
      "value": "60b19de4-e1cb-4cc7-bdd6-cedc99ef4097\\|\u001c业务123",
      "children": [
        {
          "title": "test",
          "key": "54edfeb8-450c-4463-98b4-6119e894526d",
          "value": "54edfeb8-450c-4463-98b4-6119e894526d\\|\u001ctest",
          "children": [
            {
              "title": "测试大文件",
              "key": "0c65f65c-22d3-4b76-b73a-f8649235ddbb",
              "value": "0c65f65c-22d3-4b76-b73a-f8649235ddbb\\|\u001c测试大文件",
              "children": [
                {
                  "title": "33333",
                  "key": "be3b1270-9333-4a20-8c3c-7673a5d4237c",
                  "value": "be3b1270-9333-4a20-8c3c-7673a5d4237c\\|\u001c33333",
                  "children": [
                    {
                      "title": "DGDRE",
                      "key": "6a36a9a9-db8b-4c4d-96b9-4393e5146d0e",
                      "value": "6a36a9a9-db8b-4c4d-96b9-4393e5146d0e\\|\u001cDGDRE",
                      "children": null,
                      "parentId": "be3b1270-9333-4a20-8c3c-7673a5d4237c",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "0c65f65c-22d3-4b76-b73a-f8649235ddbb",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "师傅师",
                  "key": "8b2b9c8a-e3ae-417c-b6ed-9def264ed03a",
                  "value": "8b2b9c8a-e3ae-417c-b6ed-9def264ed03a\\|\u001c师傅师",
                  "children": null,
                  "parentId": "0c65f65c-22d3-4b76-b73a-f8649235ddbb",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "54edfeb8-450c-4463-98b4-6119e894526d",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "繁体字",
              "key": "271fa265-59ad-4888-9416-a3df324f2c95",
              "value": "271fa265-59ad-4888-9416-a3df324f2c95\\|\u001c繁体字",
              "children": [
                {
                  "title": "FDFERF",
                  "key": "1fcecd9a-7889-4faf-bf21-7e8eac6fc273",
                  "value": "1fcecd9a-7889-4faf-bf21-7e8eac6fc273\\|\u001cFDFERF",
                  "children": null,
                  "parentId": "271fa265-59ad-4888-9416-a3df324f2c95",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "54edfeb8-450c-4463-98b4-6119e894526d",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            },
            {
              "title": "MP42",
              "key": "f84d1e21-3c95-4497-9030-5deecfe136b5",
              "value": "f84d1e21-3c95-4497-9030-5deecfe136b5\\|\u001cMP42",
              "children": [
                {
                  "title": "FDFEF",
                  "key": "b16e8427-13aa-42dd-87f9-eb2207689e50",
                  "value": "b16e8427-13aa-42dd-87f9-eb2207689e50\\|\u001cFDFEF",
                  "children": null,
                  "parentId": "f84d1e21-3c95-4497-9030-5deecfe136b5",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "54edfeb8-450c-4463-98b4-6119e894526d",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "60b19de4-e1cb-4cc7-bdd6-cedc99ef4097",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "测试文档",
          "key": "6ee81d39-aa5d-454b-8133-b95a67e8056e",
          "value": "6ee81d39-aa5d-454b-8133-b95a67e8056e\\|\u001c测试文档",
          "children": [
            {
              "title": "ai文档",
              "key": "cffa9dc1-c21d-498d-9a29-673cb6b2e95a",
              "value": "cffa9dc1-c21d-498d-9a29-673cb6b2e95a\\|\u001cai文档",
              "children": null,
              "parentId": "6ee81d39-aa5d-454b-8133-b95a67e8056e",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "MP4",
              "key": "b0d75f53-fb2f-41ff-ae07-d4d496c2f305",
              "value": "b0d75f53-fb2f-41ff-ae07-d4d496c2f305\\|\u001cMP4",
              "children": null,
              "parentId": "6ee81d39-aa5d-454b-8133-b95a67e8056e",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "t",
              "key": "c4878456-e3de-4db3-81ec-62ab32069c86",
              "value": "c4878456-e3de-4db3-81ec-62ab32069c86\\|\u001ct",
              "children": null,
              "parentId": "6ee81d39-aa5d-454b-8133-b95a67e8056e",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "FEFSFDSF",
              "key": "a9a28ff5-c6fb-405d-afa6-756e86a113cd",
              "value": "a9a28ff5-c6fb-405d-afa6-756e86a113cd\\|\u001cFEFSFDSF",
              "children": null,
              "parentId": "6ee81d39-aa5d-454b-8133-b95a67e8056e",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "60b19de4-e1cb-4cc7-bdd6-cedc99ef4097",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "测试大文件2",
          "key": "ce13764c-8fe4-4c49-9f6a-9b4c3968ffb5",
          "value": "ce13764c-8fe4-4c49-9f6a-9b4c3968ffb5\\|\u001c测试大文件2",
          "children": null,
          "parentId": "60b19de4-e1cb-4cc7-bdd6-cedc99ef4097",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "增加一个测试的目录",
      "key": "0833421e-342b-412c-ae77-a32c93110749",
      "value": "0833421e-342b-412c-ae77-a32c93110749\\|\u001c增加一个测试的目录",
      "children": [
        {
          "title": "test0727",
          "key": "3cad4acf-6c7f-4381-9c85-23743b9e6385",
          "value": "3cad4acf-6c7f-4381-9c85-23743b9e6385\\|\u001ctest0727",
          "children": [
            {
              "title": "3333",
              "key": "973125bf-be21-42e7-9d3a-e4222d321e59",
              "value": "973125bf-be21-42e7-9d3a-e4222d321e59\\|\u001c3333",
              "children": null,
              "parentId": "3cad4acf-6c7f-4381-9c85-23743b9e6385",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "fse",
              "key": "65bd2092-ac18-4f0d-b9f6-0f4e4893fbf2",
              "value": "65bd2092-ac18-4f0d-b9f6-0f4e4893fbf2\\|\u001cfse",
              "children": null,
              "parentId": "3cad4acf-6c7f-4381-9c85-23743b9e6385",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "0833421e-342b-412c-ae77-a32c93110749",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "3333",
          "key": "a6d3575c-edbd-4a08-8cc3-6f55a6f56ce3",
          "value": "a6d3575c-edbd-4a08-8cc3-6f55a6f56ce3\\|\u001c3333",
          "children": [
            {
              "title": "33",
              "key": "043bf1ce-6a74-4b4a-b737-0ae895c7bdfa",
              "value": "043bf1ce-6a74-4b4a-b737-0ae895c7bdfa\\|\u001c33",
              "children": null,
              "parentId": "a6d3575c-edbd-4a08-8cc3-6f55a6f56ce3",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "455",
              "key": "fd1227ab-380d-471a-b212-ee8082db2d02",
              "value": "fd1227ab-380d-471a-b212-ee8082db2d02\\|\u001c455",
              "children": null,
              "parentId": "a6d3575c-edbd-4a08-8cc3-6f55a6f56ce3",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "0833421e-342b-412c-ae77-a32c93110749",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "undefined",
          "key": "1312cbb0-9cd2-4434-97c5-1f4fd9ee6533",
          "value": "1312cbb0-9cd2-4434-97c5-1f4fd9ee6533\\|\u001cundefined",
          "children": [
            {
              "title": "123",
              "key": "c8273d45-5e89-4d54-b338-74d00a8104b4",
              "value": "c8273d45-5e89-4d54-b338-74d00a8104b4\\|\u001c123",
              "children": null,
              "parentId": "1312cbb0-9cd2-4434-97c5-1f4fd9ee6533",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "r23eweda",
              "key": "004a7430-ce8a-487b-b3d8-954314d1854d",
              "value": "004a7430-ce8a-487b-b3d8-954314d1854d\\|\u001cr23eweda",
              "children": null,
              "parentId": "1312cbb0-9cd2-4434-97c5-1f4fd9ee6533",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "0833421e-342b-412c-ae77-a32c93110749",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "test1112222",
          "key": "32f913fc-98aa-420c-8e01-b835b7b052ae",
          "value": "32f913fc-98aa-420c-8e01-b835b7b052ae\\|\u001ctest1112222",
          "children": null,
          "parentId": "0833421e-342b-412c-ae77-a32c93110749",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "新建一个根目录",
      "key": "bd3e6404-f3e8-4dc5-944e-44f1dddec902",
      "value": "bd3e6404-f3e8-4dc5-944e-44f1dddec902\\|\u001c新建一个根目录",
      "children": [
        {
          "title": "新建根目录24444",
          "key": "2552c82d-96a0-42bd-bafe-5b8f36eafdbe",
          "value": "2552c82d-96a0-42bd-bafe-5b8f36eafdbe\\|\u001c新建根目录24444",
          "children": [
            {
              "title": "3r3r3r",
              "key": "65146a45-fc88-4b9b-a6ac-1a6d7339e5a3",
              "value": "65146a45-fc88-4b9b-a6ac-1a6d7339e5a3\\|\u001c3r3r3r",
              "children": null,
              "parentId": "2552c82d-96a0-42bd-bafe-5b8f36eafdbe",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "bd3e6404-f3e8-4dc5-944e-44f1dddec902",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "仙剑目录2",
          "key": "36fa7c44-1a4e-48b6-81d0-6a3ba7728fcb",
          "value": "36fa7c44-1a4e-48b6-81d0-6a3ba7728fcb\\|\u001c仙剑目录2",
          "children": [
            {
              "title": "DFAD",
              "key": "0c27f2c0-7c73-4eb5-ae63-d69a0b7e61f4",
              "value": "0c27f2c0-7c73-4eb5-ae63-d69a0b7e61f4\\|\u001cDFAD",
              "children": null,
              "parentId": "36fa7c44-1a4e-48b6-81d0-6a3ba7728fcb",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "SDFSD",
              "key": "2b975700-3463-4cb3-9a90-3294b0817d9b",
              "value": "2b975700-3463-4cb3-9a90-3294b0817d9b\\|\u001cSDFSD",
              "children": null,
              "parentId": "36fa7c44-1a4e-48b6-81d0-6a3ba7728fcb",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "XCDZFBFD",
              "key": "787b0c74-aeae-4003-a5cc-5b21c9700e71",
              "value": "787b0c74-aeae-4003-a5cc-5b21c9700e71\\|\u001cXCDZFBFD",
              "children": null,
              "parentId": "36fa7c44-1a4e-48b6-81d0-6a3ba7728fcb",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "fewrfesf1111",
              "key": "aba2f1a7-3fca-4fd6-aa55-751d57554988",
              "value": "aba2f1a7-3fca-4fd6-aa55-751d57554988\\|\u001cfewrfesf1111",
              "children": null,
              "parentId": "36fa7c44-1a4e-48b6-81d0-6a3ba7728fcb",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "bd3e6404-f3e8-4dc5-944e-44f1dddec902",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "WRFDWD",
          "key": "ae80a819-ae6b-46ed-8789-24623ef4c9e2",
          "value": "ae80a819-ae6b-46ed-8789-24623ef4c9e2\\|\u001cWRFDWD",
          "children": [
            {
              "title": "sdsfdf",
              "key": "e738fc2e-b01e-4e7c-bf6b-8cce0f2b3c87",
              "value": "e738fc2e-b01e-4e7c-bf6b-8cce0f2b3c87\\|\u001csdsfdf",
              "children": null,
              "parentId": "ae80a819-ae6b-46ed-8789-24623ef4c9e2",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "fefs",
              "key": "a9f1bb33-eeaf-4f11-9f27-841f1958cdc1",
              "value": "a9f1bb33-eeaf-4f11-9f27-841f1958cdc1\\|\u001cfefs",
              "children": null,
              "parentId": "ae80a819-ae6b-46ed-8789-24623ef4c9e2",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "bd3e6404-f3e8-4dc5-944e-44f1dddec902",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "DFGRG",
          "key": "188902d9-f478-42fb-85f8-533bccd6c452",
          "value": "188902d9-f478-42fb-85f8-533bccd6c452\\|\u001cDFGRG",
          "children": [
            {
              "title": "2",
              "key": "92e0359d-bade-4213-a419-1401543e6e02",
              "value": "92e0359d-bade-4213-a419-1401543e6e02\\|\u001c2",
              "children": null,
              "parentId": "188902d9-f478-42fb-85f8-533bccd6c452",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "333",
              "key": "ff915323-8710-436a-9d35-6b10f1b35b68",
              "value": "ff915323-8710-436a-9d35-6b10f1b35b68\\|\u001c333",
              "children": null,
              "parentId": "188902d9-f478-42fb-85f8-533bccd6c452",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "bd3e6404-f3e8-4dc5-944e-44f1dddec902",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "fddddd",
          "key": "6be48bba-5c30-412a-bf93-4856b1c0ba6f",
          "value": "6be48bba-5c30-412a-bf93-4856b1c0ba6f\\|\u001cfddddd",
          "children": null,
          "parentId": "bd3e6404-f3e8-4dc5-944e-44f1dddec902",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "FSDFSFSDF",
      "key": "a6a93706-dfa5-4fb0-9b69-9592cd3cd10a",
      "value": "a6a93706-dfa5-4fb0-9b69-9592cd3cd10a\\|\u001cFSDFSFSDF",
      "children": [
        {
          "title": "目录222",
          "key": "84d92da8-21d2-4483-9052-44592b58518d",
          "value": "84d92da8-21d2-4483-9052-44592b58518d\\|\u001c目录222",
          "children": [
            {
              "title": "目录222",
              "key": "38cce393-952e-445c-85f2-cc9a584100f1",
              "value": "38cce393-952e-445c-85f2-cc9a584100f1\\|\u001c目录222",
              "children": [
                {
                  "title": "目录222",
                  "key": "f5b7fbc1-1287-4bb7-a5d8-f080468b7c4f",
                  "value": "f5b7fbc1-1287-4bb7-a5d8-f080468b7c4f\\|\u001c目录222",
                  "children": [
                    {
                      "title": "目录222",
                      "key": "65021a28-2401-48ce-80c0-1f2db97e18f9",
                      "value": "65021a28-2401-48ce-80c0-1f2db97e18f9\\|\u001c目录222",
                      "children": [
                        {
                          "title": "目录222",
                          "key": "5f21174e-e9b0-4140-b7f0-9cb2b97e4ca9",
                          "value": "5f21174e-e9b0-4140-b7f0-9cb2b97e4ca9\\|\u001c目录222",
                          "children": [
                            {
                              "title": "目录222",
                              "key": "111b125d-36fe-43b5-886e-960cee91eeba",
                              "value": "111b125d-36fe-43b5-886e-960cee91eeba\\|\u001c目录222",
                              "children": [
                                {
                                  "title": "目录222",
                                  "key": "634ee0ec-f9bd-4d36-b584-a2226f0f3135",
                                  "value": "634ee0ec-f9bd-4d36-b584-a2226f0f3135\\|\u001c目录222",
                                  "children": [
                                    {
                                      "title": "目录222",
                                      "key": "64ea37a7-ef0e-4de0-a067-f42402a689b8",
                                      "value": "64ea37a7-ef0e-4de0-a067-f42402a689b8\\|\u001c目录222",
                                      "children": [
                                        {
                                          "title": "目录222目录222目录222目录222",
                                          "key": "04678beb-f0df-48c0-82c1-072c78fc062e",
                                          "value": "04678beb-f0df-48c0-82c1-072c78fc062e\\|\u001c目录222目录222目录222目录222",
                                          "children": [
                                            {
                                              "title": "目录222",
                                              "key": "eeac8f5e-67e6-4aaf-ab4c-5a720e07a624",
                                              "value": "eeac8f5e-67e6-4aaf-ab4c-5a720e07a624\\|\u001c目录222",
                                              "children": [
                                                {
                                                  "title": "目录222",
                                                  "key": "d57bce97-8f79-493b-840a-d452426d9ba0",
                                                  "value": "d57bce97-8f79-493b-840a-d452426d9ba0\\|\u001c目录222",
                                                  "children": [
                                                    {
                                                      "title": "目录222",
                                                      "key": "5ddb0336-c1b9-4414-8dd9-7b72cb7bed81",
                                                      "value": "5ddb0336-c1b9-4414-8dd9-7b72cb7bed81\\|\u001c目录222",
                                                      "children": [
                                                        {
                                                          "title": "目录222",
                                                          "key": "0f55f67e-9692-4506-adfa-396ee5624e14",
                                                          "value": "0f55f67e-9692-4506-adfa-396ee5624e14\\|\u001c目录222",
                                                          "children": [
                                                            {
                                                              "title": "目录222",
                                                              "key": "7dc2732b-8dfb-45fa-b9b4-8400ff01a2ae",
                                                              "value": "7dc2732b-8dfb-45fa-b9b4-8400ff01a2ae\\|\u001c目录222",
                                                              "children": [
                                                                {
                                                                  "title": "目录222",
                                                                  "key": "d36ee39d-a04d-4a9b-9135-76025aac8548",
                                                                  "value": "d36ee39d-a04d-4a9b-9135-76025aac8548\\|\u001c目录222",
                                                                  "children": [
                                                                    {
                                                                      "title": "目录222",
                                                                      "key": "14ccba15-d028-4615-84d8-76955782ff27",
                                                                      "value": "14ccba15-d028-4615-84d8-76955782ff27\\|\u001c目录222",
                                                                      "children": [
                                                                        {
                                                                          "title": "目录222",
                                                                          "key": "072c0a4a-9532-4829-ba6e-a45ec98056b3",
                                                                          "value": "072c0a4a-9532-4829-ba6e-a45ec98056b3\\|\u001c目录222",
                                                                          "children": [
                                                                            {
                                                                              "title": "目录222",
                                                                              "key": "1ffb5203-cf5c-4c03-a903-9367afe35b5c",
                                                                              "value": "1ffb5203-cf5c-4c03-a903-9367afe35b5c\\|\u001c目录222",
                                                                              "children": [
                                                                                {
                                                                                  "title": "目录222",
                                                                                  "key": "8f889b7a-b60a-45d7-8bfe-87812993b0bf",
                                                                                  "value": "8f889b7a-b60a-45d7-8bfe-87812993b0bf\\|\u001c目录222",
                                                                                  "children": null,
                                                                                  "parentId": "1ffb5203-cf5c-4c03-a903-9367afe35b5c",
                                                                                  "maskAsProduct": false,
                                                                                  "isLeaf": true,
                                                                                  "selected": null,
                                                                                  "writable": true
                                                                                }
                                                                              ],
                                                                              "parentId": "072c0a4a-9532-4829-ba6e-a45ec98056b3",
                                                                              "maskAsProduct": false,
                                                                              "isLeaf": false,
                                                                              "selected": null,
                                                                              "writable": true
                                                                            }
                                                                          ],
                                                                          "parentId": "14ccba15-d028-4615-84d8-76955782ff27",
                                                                          "maskAsProduct": false,
                                                                          "isLeaf": false,
                                                                          "selected": null,
                                                                          "writable": true
                                                                        }
                                                                      ],
                                                                      "parentId": "d36ee39d-a04d-4a9b-9135-76025aac8548",
                                                                      "maskAsProduct": false,
                                                                      "isLeaf": false,
                                                                      "selected": null,
                                                                      "writable": true
                                                                    }
                                                                  ],
                                                                  "parentId": "7dc2732b-8dfb-45fa-b9b4-8400ff01a2ae",
                                                                  "maskAsProduct": false,
                                                                  "isLeaf": false,
                                                                  "selected": null,
                                                                  "writable": true
                                                                }
                                                              ],
                                                              "parentId": "0f55f67e-9692-4506-adfa-396ee5624e14",
                                                              "maskAsProduct": false,
                                                              "isLeaf": false,
                                                              "selected": null,
                                                              "writable": true
                                                            }
                                                          ],
                                                          "parentId": "5ddb0336-c1b9-4414-8dd9-7b72cb7bed81",
                                                          "maskAsProduct": false,
                                                          "isLeaf": false,
                                                          "selected": null,
                                                          "writable": true
                                                        }
                                                      ],
                                                      "parentId": "d57bce97-8f79-493b-840a-d452426d9ba0",
                                                      "maskAsProduct": false,
                                                      "isLeaf": false,
                                                      "selected": null,
                                                      "writable": true
                                                    },
                                                    {
                                                      "title": "fdsfdsfsdf",
                                                      "key": "f0af8ff5-e169-4d71-80fe-620a9105cf1e",
                                                      "value": "f0af8ff5-e169-4d71-80fe-620a9105cf1e\\|\u001cfdsfdsfsdf",
                                                      "children": null,
                                                      "parentId": "d57bce97-8f79-493b-840a-d452426d9ba0",
                                                      "maskAsProduct": false,
                                                      "isLeaf": true,
                                                      "selected": null,
                                                      "writable": true
                                                    }
                                                  ],
                                                  "parentId": "eeac8f5e-67e6-4aaf-ab4c-5a720e07a624",
                                                  "maskAsProduct": false,
                                                  "isLeaf": false,
                                                  "selected": null,
                                                  "writable": true
                                                }
                                              ],
                                              "parentId": "04678beb-f0df-48c0-82c1-072c78fc062e",
                                              "maskAsProduct": false,
                                              "isLeaf": false,
                                              "selected": null,
                                              "writable": true
                                            }
                                          ],
                                          "parentId": "64ea37a7-ef0e-4de0-a067-f42402a689b8",
                                          "maskAsProduct": false,
                                          "isLeaf": false,
                                          "selected": null,
                                          "writable": true
                                        }
                                      ],
                                      "parentId": "634ee0ec-f9bd-4d36-b584-a2226f0f3135",
                                      "maskAsProduct": false,
                                      "isLeaf": false,
                                      "selected": null,
                                      "writable": true
                                    },
                                    {
                                      "title": "888888",
                                      "key": "9c1e7b3f-4fd7-4ab0-b9eb-105acf993295",
                                      "value": "9c1e7b3f-4fd7-4ab0-b9eb-105acf993295\\|\u001c888888",
                                      "children": null,
                                      "parentId": "634ee0ec-f9bd-4d36-b584-a2226f0f3135",
                                      "maskAsProduct": false,
                                      "isLeaf": true,
                                      "selected": null,
                                      "writable": true
                                    }
                                  ],
                                  "parentId": "111b125d-36fe-43b5-886e-960cee91eeba",
                                  "maskAsProduct": false,
                                  "isLeaf": false,
                                  "selected": null,
                                  "writable": true
                                }
                              ],
                              "parentId": "5f21174e-e9b0-4140-b7f0-9cb2b97e4ca9",
                              "maskAsProduct": false,
                              "isLeaf": false,
                              "selected": null,
                              "writable": true
                            }
                          ],
                          "parentId": "65021a28-2401-48ce-80c0-1f2db97e18f9",
                          "maskAsProduct": false,
                          "isLeaf": false,
                          "selected": null,
                          "writable": true
                        },
                        {
                          "title": "123123123123123123123123",
                          "key": "a3b1dd78-7790-43bf-bf42-bf7a9b6c77ef",
                          "value": "a3b1dd78-7790-43bf-bf42-bf7a9b6c77ef\\|\u001c123123123123123123123123",
                          "children": null,
                          "parentId": "65021a28-2401-48ce-80c0-1f2db97e18f9",
                          "maskAsProduct": false,
                          "isLeaf": true,
                          "selected": null,
                          "writable": true
                        }
                      ],
                      "parentId": "f5b7fbc1-1287-4bb7-a5d8-f080468b7c4f",
                      "maskAsProduct": false,
                      "isLeaf": false,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "38cce393-952e-445c-85f2-cc9a584100f1",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "sfefs123123123123",
                  "key": "1e6b7a56-4a30-4a89-bec4-bb114d2d6a0a",
                  "value": "1e6b7a56-4a30-4a89-bec4-bb114d2d6a0a\\|\u001csfefs123123123123",
                  "children": [
                    {
                      "title": "fwefsfsdff3333333333333333",
                      "key": "1f9f280d-5ac7-4d26-a4b5-92b6a374f739",
                      "value": "1f9f280d-5ac7-4d26-a4b5-92b6a374f739\\|\u001cfwefsfsdff3333333333333333",
                      "children": null,
                      "parentId": "1e6b7a56-4a30-4a89-bec4-bb114d2d6a0a",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "38cce393-952e-445c-85f2-cc9a584100f1",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "84d92da8-21d2-4483-9052-44592b58518d",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "a6a93706-dfa5-4fb0-9b69-9592cd3cd10a",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "fsdfsd33333",
          "key": "617a4fe8-1a78-41eb-b2a1-273d9f4a6dd9",
          "value": "617a4fe8-1a78-41eb-b2a1-273d9f4a6dd9\\|\u001cfsdfsd33333",
          "children": null,
          "parentId": "a6a93706-dfa5-4fb0-9b69-9592cd3cd10a",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "方式等纷纷",
          "key": "97ad8d6c-53aa-4a81-8421-c60f1fd39ada",
          "value": "97ad8d6c-53aa-4a81-8421-c60f1fd39ada\\|\u001c方式等纷纷",
          "children": null,
          "parentId": "a6a93706-dfa5-4fb0-9b69-9592cd3cd10a",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "234r3d5t34",
      "key": "0dd280f1-cd0d-48df-a765-bfd144129098",
      "value": "0dd280f1-cd0d-48df-a765-bfd144129098\\|\u001c234r3d5t34",
      "children": [
        {
          "title": "fd",
          "key": "610f0517-a1ec-437d-abfe-8af041410000",
          "value": "610f0517-a1ec-437d-abfe-8af041410000\\|\u001cfd",
          "children": [
            {
              "title": "fwefw",
              "key": "d7871e43-5450-465e-a87f-f3822f094730",
              "value": "d7871e43-5450-465e-a87f-f3822f094730\\|\u001cfwefw",
              "children": null,
              "parentId": "610f0517-a1ec-437d-abfe-8af041410000",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "fwef",
              "key": "7df4be29-cfdc-4378-9b1a-c3335a81f3a9",
              "value": "7df4be29-cfdc-4378-9b1a-c3335a81f3a9\\|\u001cfwef",
              "children": null,
              "parentId": "610f0517-a1ec-437d-abfe-8af041410000",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "0dd280f1-cd0d-48df-a765-bfd144129098",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "w",
          "key": "846db171-a629-49f7-963a-67dce189f3ad",
          "value": "846db171-a629-49f7-963a-67dce189f3ad\\|\u001cw",
          "children": null,
          "parentId": "0dd280f1-cd0d-48df-a765-bfd144129098",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "eEVDVDVD",
      "key": "4088ef18-5058-4f34-99e2-42a8540ff8e8",
      "value": "4088ef18-5058-4f34-99e2-42a8540ff8e8\\|\u001ceEVDVDVD",
      "children": [
        {
          "title": "聚合收款4444",
          "key": "d66e4dde-f128-4bb9-9ec7-9b29b31e4fd0",
          "value": "d66e4dde-f128-4bb9-9ec7-9b29b31e4fd0\\|\u001c聚合收款4444",
          "children": [
            {
              "title": "33333",
              "key": "d7030932-9691-4126-a120-378a096d7b74",
              "value": "d7030932-9691-4126-a120-378a096d7b74\\|\u001c33333",
              "children": null,
              "parentId": "d66e4dde-f128-4bb9-9ec7-9b29b31e4fd0",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "4088ef18-5058-4f34-99e2-42a8540ff8e8",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "聚合收款——王勇",
          "key": "ca11b8ca-182c-424e-a814-ba34a9f22c76",
          "value": "ca11b8ca-182c-424e-a814-ba34a9f22c76\\|\u001c聚合收款——王勇",
          "children": [
            {
              "title": "sss",
              "key": "bb33f719-e64e-483d-bfe8-8fa582170393",
              "value": "bb33f719-e64e-483d-bfe8-8fa582170393\\|\u001csss",
              "children": null,
              "parentId": "ca11b8ca-182c-424e-a814-ba34a9f22c76",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "4088ef18-5058-4f34-99e2-42a8540ff8e8",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "Test",
          "key": "cd24599f-8110-4c25-9f9a-ce8d9a56933f",
          "value": "cd24599f-8110-4c25-9f9a-ce8d9a56933f\\|\u001cTest",
          "children": [
            {
              "title": "firstChild",
              "key": "2c54c4aa-7fb3-4da8-b2ad-309765a28497",
              "value": "2c54c4aa-7fb3-4da8-b2ad-309765a28497\\|\u001cfirstChild",
              "children": null,
              "parentId": "cd24599f-8110-4c25-9f9a-ce8d9a56933f",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "4088ef18-5058-4f34-99e2-42a8540ff8e8",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "新建子目录sdfdsf",
          "key": "0610c13e-283f-47c0-ae9b-c825841f34bc",
          "value": "0610c13e-283f-47c0-ae9b-c825841f34bc\\|\u001c新建子目录sdfdsf",
          "children": [
            {
              "title": "fefwse",
              "key": "64a73021-93e5-4682-b4f5-1269ef8313fa",
              "value": "64a73021-93e5-4682-b4f5-1269ef8313fa\\|\u001cfefwse",
              "children": null,
              "parentId": "0610c13e-283f-47c0-ae9b-c825841f34bc",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            },
            {
              "title": "22222",
              "key": "ada77eb8-4351-4b1c-8595-35493ac1878c",
              "value": "ada77eb8-4351-4b1c-8595-35493ac1878c\\|\u001c22222",
              "children": null,
              "parentId": "0610c13e-283f-47c0-ae9b-c825841f34bc",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "4088ef18-5058-4f34-99e2-42a8540ff8e8",
          "maskAsProduct": true,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "fsesfesfsf",
          "key": "098d86b7-99dd-4e40-b95b-3347eb72bab6",
          "value": "098d86b7-99dd-4e40-b95b-3347eb72bab6\\|\u001cfsesfesfsf",
          "children": null,
          "parentId": "4088ef18-5058-4f34-99e2-42a8540ff8e8",
          "maskAsProduct": true,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "888888",
          "key": "f86c4e81-46b4-47b3-8bef-a16b75c54e94",
          "value": "f86c4e81-46b4-47b3-8bef-a16b75c54e94\\|\u001c888888",
          "children": null,
          "parentId": "4088ef18-5058-4f34-99e2-42a8540ff8e8",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "123",
          "key": "59178c94-462d-459f-b7c0-eb289f8fdd49",
          "value": "59178c94-462d-459f-b7c0-eb289f8fdd49\\|\u001c123",
          "children": null,
          "parentId": "4088ef18-5058-4f34-99e2-42a8540ff8e8",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "33333333",
      "key": "c98acd7d-e9a0-4a23-bb2b-074335076838",
      "value": "c98acd7d-e9a0-4a23-bb2b-074335076838\\|\u001c33333333",
      "children": [
        {
          "title": "sre23232",
          "key": "c142cb7e-2657-4cce-9fb9-02e7bc2df89c",
          "value": "c142cb7e-2657-4cce-9fb9-02e7bc2df89c\\|\u001csre23232",
          "children": [
            {
              "title": "fwfsdfs",
              "key": "587570e1-cbb9-4647-91aa-25010a345c79",
              "value": "587570e1-cbb9-4647-91aa-25010a345c79\\|\u001cfwfsdfs",
              "children": [
                {
                  "title": "88888888899999999",
                  "key": "5d26cc62-1b4c-4467-b9cd-e4054d62c1f8",
                  "value": "5d26cc62-1b4c-4467-b9cd-e4054d62c1f8\\|\u001c88888888899999999",
                  "children": [
                    {
                      "title": "额鹅鹅鹅",
                      "key": "60026d1c-bc29-4d67-bae8-e08d38a3c74f",
                      "value": "60026d1c-bc29-4d67-bae8-e08d38a3c74f\\|\u001c额鹅鹅鹅",
                      "children": null,
                      "parentId": "5d26cc62-1b4c-4467-b9cd-e4054d62c1f8",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    },
                    {
                      "title": "鹅鹅鹅曲项向天歌",
                      "key": "f3e0c531-9907-427e-b280-46f8024bc3af",
                      "value": "f3e0c531-9907-427e-b280-46f8024bc3af\\|\u001c鹅鹅鹅曲项向天歌",
                      "children": null,
                      "parentId": "5d26cc62-1b4c-4467-b9cd-e4054d62c1f8",
                      "maskAsProduct": false,
                      "isLeaf": true,
                      "selected": null,
                      "writable": true
                    }
                  ],
                  "parentId": "587570e1-cbb9-4647-91aa-25010a345c79",
                  "maskAsProduct": false,
                  "isLeaf": false,
                  "selected": null,
                  "writable": true
                },
                {
                  "title": "辅导辅导辅导费",
                  "key": "3af54b44-ed00-47b5-be8a-f0c3ba986bd7",
                  "value": "3af54b44-ed00-47b5-be8a-f0c3ba986bd7\\|\u001c辅导辅导辅导费",
                  "children": null,
                  "parentId": "587570e1-cbb9-4647-91aa-25010a345c79",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "c142cb7e-2657-4cce-9fb9-02e7bc2df89c",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "c98acd7d-e9a0-4a23-bb2b-074335076838",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "2vdefefDFE",
          "key": "ba00ff59-5178-496d-bad3-55b68c9d456d",
          "value": "ba00ff59-5178-496d-bad3-55b68c9d456d\\|\u001c2vdefefDFE",
          "children": [
            {
              "title": "第三层",
              "key": "2d40203b-2dfb-4183-9ddd-9044fe2887dc",
              "value": "2d40203b-2dfb-4183-9ddd-9044fe2887dc\\|\u001c第三层",
              "children": [
                {
                  "title": "444",
                  "key": "0817e03a-4ffc-4e12-b1ad-0a7e5ca18ac4",
                  "value": "0817e03a-4ffc-4e12-b1ad-0a7e5ca18ac4\\|\u001c444",
                  "children": null,
                  "parentId": "2d40203b-2dfb-4183-9ddd-9044fe2887dc",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "ba00ff59-5178-496d-bad3-55b68c9d456d",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "c98acd7d-e9a0-4a23-bb2b-074335076838",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色",
          "key": "0a97f29a-43dc-4f62-8cb4-0534657a7d0d",
          "value": "0a97f29a-43dc-4f62-8cb4-0534657a7d0d\\|\u001c粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色粉色",
          "children": [
            {
              "title": "12",
              "key": "eb82efbb-0ea9-4bc7-bdc3-6fe3c344f1b6",
              "value": "eb82efbb-0ea9-4bc7-bdc3-6fe3c344f1b6\\|\u001c12",
              "children": null,
              "parentId": "0a97f29a-43dc-4f62-8cb4-0534657a7d0d",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "c98acd7d-e9a0-4a23-bb2b-074335076838",
          "maskAsProduct": true,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "seseses",
          "key": "b08f0093-5fa0-48b5-93df-b75a06a6c445",
          "value": "b08f0093-5fa0-48b5-93df-b75a06a6c445\\|\u001cseseses",
          "children": null,
          "parentId": "c98acd7d-e9a0-4a23-bb2b-074335076838",
          "maskAsProduct": true,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "test",
      "key": "78e9d054-3a0a-47f7-bc9a-d79adbf86760",
      "value": "78e9d054-3a0a-47f7-bc9a-d79adbf86760\\|\u001ctest",
      "children": [
        {
          "title": "33333",
          "key": "f67438ff-2634-4a5f-9667-6dd453aec3e8",
          "value": "f67438ff-2634-4a5f-9667-6dd453aec3e8\\|\u001c33333",
          "children": [
            {
              "title": "123123",
              "key": "aa099cf1-3fd1-428e-98b3-01ea946f969b",
              "value": "aa099cf1-3fd1-428e-98b3-01ea946f969b\\|\u001c123123",
              "children": [
                {
                  "title": "2we",
                  "key": "d944fac0-c3b3-4a42-ae52-0c8ee864335e",
                  "value": "d944fac0-c3b3-4a42-ae52-0c8ee864335e\\|\u001c2we",
                  "children": null,
                  "parentId": "aa099cf1-3fd1-428e-98b3-01ea946f969b",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "f67438ff-2634-4a5f-9667-6dd453aec3e8",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "78e9d054-3a0a-47f7-bc9a-d79adbf86760",
          "maskAsProduct": true,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "fddd",
          "key": "e8db11f9-86cd-4443-ba09-15d280177e56",
          "value": "e8db11f9-86cd-4443-ba09-15d280177e56\\|\u001cfddd",
          "children": null,
          "parentId": "78e9d054-3a0a-47f7-bc9a-d79adbf86760",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长标题",
          "key": "6c780923-1bf0-4c33-b7b3-d842280d0704",
          "value": "6c780923-1bf0-4c33-b7b3-d842280d0704\\|\u001c长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长标题",
          "children": [
            {
              "title": "jghj",
              "key": "fcf6f403-1bb3-46bf-8118-660518c43eae",
              "value": "fcf6f403-1bb3-46bf-8118-660518c43eae\\|\u001cjghj",
              "children": null,
              "parentId": "6c780923-1bf0-4c33-b7b3-d842280d0704",
              "maskAsProduct": false,
              "isLeaf": true,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "78e9d054-3a0a-47f7-bc9a-d79adbf86760",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "父目录",
      "key": "b14f3eb5-591b-469b-bca3-f68224cada2a",
      "value": "b14f3eb5-591b-469b-bca3-f68224cada2a\\|\u001c父目录",
      "children": [
        {
          "title": "2222",
          "key": "d265fb71-bbe0-42bd-92a7-231151ee5f22",
          "value": "d265fb71-bbe0-42bd-92a7-231151ee5f22\\|\u001c2222",
          "children": [
            {
              "title": "33333",
              "key": "6bfabbb7-4a13-465a-8732-265d21dfb90d",
              "value": "6bfabbb7-4a13-465a-8732-265d21dfb90d\\|\u001c33333",
              "children": [
                {
                  "title": "444",
                  "key": "72f1f6e8-7b3e-4253-a6ee-82181dbeefee",
                  "value": "72f1f6e8-7b3e-4253-a6ee-82181dbeefee\\|\u001c444",
                  "children": null,
                  "parentId": "6bfabbb7-4a13-465a-8732-265d21dfb90d",
                  "maskAsProduct": false,
                  "isLeaf": true,
                  "selected": null,
                  "writable": true
                }
              ],
              "parentId": "d265fb71-bbe0-42bd-92a7-231151ee5f22",
              "maskAsProduct": false,
              "isLeaf": false,
              "selected": null,
              "writable": true
            }
          ],
          "parentId": "b14f3eb5-591b-469b-bca3-f68224cada2a",
          "maskAsProduct": false,
          "isLeaf": false,
          "selected": null,
          "writable": true
        },
        {
          "title": "深啡",
          "key": "15bd08b5-609d-4cf9-9403-79df652c42e7",
          "value": "15bd08b5-609d-4cf9-9403-79df652c42e7\\|\u001c深啡",
          "children": null,
          "parentId": "b14f3eb5-591b-469b-bca3-f68224cada2a",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "toast",
          "key": "c071eb2f-d499-4b55-b45b-bd78cd6c5a86",
          "value": "c071eb2f-d499-4b55-b45b-bd78cd6c5a86\\|\u001ctoast",
          "children": null,
          "parentId": "b14f3eb5-591b-469b-bca3-f68224cada2a",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "sfefs11111",
      "key": "0968716f-a156-48ee-968e-ffbd3f7b4f54",
      "value": "0968716f-a156-48ee-968e-ffbd3f7b4f54\\|\u001csfefs11111",
      "children": [
        {
          "title": "sdfwdfsf",
          "key": "4816548e-aa9b-40d1-ae53-a0f4a9cc90c2",
          "value": "4816548e-aa9b-40d1-ae53-a0f4a9cc90c2\\|\u001csdfwdfsf",
          "children": null,
          "parentId": "0968716f-a156-48ee-968e-ffbd3f7b4f54",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "3333",
          "key": "b7082fe0-5624-4838-9f13-967523ae17b9",
          "value": "b7082fe0-5624-4838-9f13-967523ae17b9\\|\u001c3333",
          "children": null,
          "parentId": "0968716f-a156-48ee-968e-ffbd3f7b4f54",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "fesew",
          "key": "dcf90cc2-6e38-4237-bdca-e24ed7f55773",
          "value": "dcf90cc2-6e38-4237-bdca-e24ed7f55773\\|\u001cfesew",
          "children": null,
          "parentId": "0968716f-a156-48ee-968e-ffbd3f7b4f54",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "123",
          "key": "63d30b12-2273-4286-9f25-77ad33e6960d",
          "value": "63d30b12-2273-4286-9f25-77ad33e6960d\\|\u001c123",
          "children": null,
          "parentId": "0968716f-a156-48ee-968e-ffbd3f7b4f54",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "fdsfdsfDFGD",
      "key": "124d58f6-f8c0-4d3d-948e-396bfaeb17a0",
      "value": "124d58f6-f8c0-4d3d-948e-396bfaeb17a0\\|\u001cfdsfdsfDFGD",
      "children": [
        {
          "title": "sefsd",
          "key": "7a3fb676-3524-4a69-9eaa-3a39e19ee4d9",
          "value": "7a3fb676-3524-4a69-9eaa-3a39e19ee4d9\\|\u001csefsd",
          "children": null,
          "parentId": "124d58f6-f8c0-4d3d-948e-396bfaeb17a0",
          "maskAsProduct": true,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "冯绍峰",
          "key": "0b9968ef-58cc-4c45-b323-6732b9d62c3c",
          "value": "0b9968ef-58cc-4c45-b323-6732b9d62c3c\\|\u001c冯绍峰",
          "children": null,
          "parentId": "124d58f6-f8c0-4d3d-948e-396bfaeb17a0",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "温文峰v",
          "key": "c3d371e6-bbea-4b4e-97bc-f0a1c689052b",
          "value": "c3d371e6-bbea-4b4e-97bc-f0a1c689052b\\|\u001c温文峰v",
          "children": null,
          "parentId": "124d58f6-f8c0-4d3d-948e-396bfaeb17a0",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "ssfd",
          "key": "95539e95-28bc-443f-afb0-d1f6dcf02abc",
          "value": "95539e95-28bc-443f-afb0-d1f6dcf02abc\\|\u001cssfd",
          "children": null,
          "parentId": "124d58f6-f8c0-4d3d-948e-396bfaeb17a0",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        },
        {
          "title": "zll",
          "key": "8e4af1c9-64ca-4e9a-969f-328ba82a012b",
          "value": "8e4af1c9-64ca-4e9a-969f-328ba82a012b\\|\u001czll",
          "children": null,
          "parentId": "124d58f6-f8c0-4d3d-948e-396bfaeb17a0",
          "maskAsProduct": false,
          "isLeaf": true,
          "selected": null,
          "writable": true
        }
      ],
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": false,
      "selected": null,
      "writable": true
    },
    {
      "title": "父目录2222",
      "key": "7ffca953-e41b-4330-b5c1-3909405b0c24",
      "value": "7ffca953-e41b-4330-b5c1-3909405b0c24\\|\u001c父目录2222",
      "children": null,
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": true,
      "selected": null,
      "writable": true
    },
    {
      "title": "业务123",
      "key": "95759d58-6b35-47fc-9c1f-82a27323184e",
      "value": "95759d58-6b35-47fc-9c1f-82a27323184e\\|\u001c业务123",
      "children": null,
      "parentId": null,
      "maskAsProduct": false,
      "isLeaf": true,
      "selected": null,
      "writable": true
    }
  ]

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
}
