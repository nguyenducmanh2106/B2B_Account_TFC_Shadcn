import { PICType, RegistrationRound, type RegistrationModel, type ResponseData } from "@/api";
import { getRegistration } from "@/api/services/RegistrationService";
import { systemSettingAtom } from "@/atoms/system-setting-atom";
import { currentUserAtom } from "@/atoms/user-atom";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColDef, ColGroupDef, GridReadyEvent, IServerSideDatasource } from "ag-grid-enterprise";
import { AgGridReact } from 'ag-grid-react';
import { useAtom } from "jotai";
import { useCallback, useMemo, useRef, useState } from "react";

export function Component() {
  const [user, setUser] = useAtom(currentUserAtom)
  const gridContainerRef = useRef(null);
  const containerStyle = useMemo(() => ({ width: '100%', height: 'calc(100vh - 176px)' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const defaultPageSize = 20 as number;
  const gridRef = useRef<AgGridReact<RegistrationModel>>(null);
  const getRowId = useMemo(() => {
    return (params: any) => `${params.data.id}`;
  }, []);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      // flex: 1,
      // minWidth: 90,
      resizable: true,
      // enableCellChangeFlash: true,
      suppressMenu: true,
      sortable: false,
      editable: false,
    };
  }, []);
  const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([
    {
      field: 'id',
      maxWidth: 40,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      // headerCheckboxSelectionCurrentPageOnly: true,
      headerName: "",
      pinned: true,
      resizable: false,
      suppressMovable: true,
      lockPosition: true,
      editable: false,
      cellStyle: {
        lineHeight: '50px'
      },
      cellRendererParams: (params: any) => {
        console.log(params);
      },
      cellRenderer: (params: any) => {
        console.log(gridRef.current);
        return (
          <Checkbox
            defaultChecked={params.node.selected}
            // checked={table.getIsAllPageRowsSelected() ||
            //   (table.getIsSomePageRowsSelected() && "indeterminate")}
            // onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            onCheckedChange={(value) => params.node.setSelected(!!value)}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        )
      }
    },
    {
      field: 'STT',
      headerName: "STT",
      colId: 'STT',
      width: 60,
      maxWidth: 60,
      cellRenderer: (data: any) => {
        return <span>{data.node.rowIndex + 1}</span>
      },
      cellStyle: {
        lineHeight: '50px'
      }
    },

    {
      headerName: 'Số báo danh',
      field: 'registrationNumber',
      colId: 'registrationNumber',
      tooltipField: 'registrationNumber',
      width: 120,
      cellStyle: {
        lineHeight: '50px'
      }
    },
    {
      headerName: 'Họ tên',
      field: 'fullName',
      colId: 'fullName',
      tooltipField: 'registrationNumber',
      width: 160,
      cellStyle: {
        lineHeight: '50px'
      }
    },
    {
      headerName: 'Ngày sinh',
      field: 'birthDay',
      colId: 'birthDay',
      width: 100,
      cellStyle: {
        lineHeight: '50px'
      },
      cellRenderer: ({ data: record }: { data: RegistrationModel }) => {
        return (
          <span>{String(record?.dayOfBirth).padStart(2, '0')}/{String(record?.monthOfBirth).padStart(2, '0')}/{String(record?.yearOfBirth).padStart(2, '0')}</span>
        )
      }
    },
    {
      headerName: 'Lớp/Khối',
      field: 'class',
      colId: 'class',
      width: 100,
      cellStyle: {
        lineHeight: '50px'
      },
      cellRenderer: ({ data: record }: { data: RegistrationModel }) => {
        return (
          <span>{record.class + "/" + record.block}</span>
        )
      }
    },
    {
      headerName: 'Trường',
      field: 'schoolName',
      colId: 'schoolName',
      tooltipField: 'registrationNumber',
      width: 160,
      cellStyle: {
        lineHeight: '50px'
      },
    },
    {
      headerName: 'Cuộc thi',
      field: 'examName',
      colId: 'examName',
      tooltipField: 'registrationNumber',
      width: 160,
      cellStyle: {
        lineHeight: '50px'
      },
    },
    {
      headerName: 'Vòng thi',
      field: 'examName',
      colId: 'examName',
      tooltipField: 'registrationNumber',
      width: 120,
      cellStyle: {
        lineHeight: '50px'
      },
      cellRenderer: ({ data: record }: { data: RegistrationModel }) => {
        return (
          <span>{record.round === RegistrationRound._1 ? "Vòng 1" : record.round === RegistrationRound._2 ? "Vòng 2" : record.round === RegistrationRound._3 ? "Vòng 3" : ""}</span>
        )
      }
    },
    {
      headerComponent: () => <>Họ tên<br /> phụ huynh(bố)</>,
      field: 'fatherName',
      colId: 'fatherName',
      tooltipField: 'registrationNumber',
      width: 160,
      cellStyle: {
        lineHeight: '50px'
      },
    },
    {
      headerComponent: () => <>Họ tên<br /> phụ huynh(mẹ)</>,
      field: 'motherName',
      colId: 'motherName',
      tooltipField: 'registrationNumber',
      width: 160,
      cellStyle: {
        lineHeight: '50px'
      },
    },
    {
      headerName: 'SĐT',
      field: 'tel',
      colId: 'tel',
      tooltipField: 'registrationNumber',
      width: 120,
      cellStyle: {
        lineHeight: '50px'
      },
    },
    {
      headerName: 'Email',
      field: 'email',
      colId: 'email',
      tooltipField: 'registrationNumber',
      width: 160,
      cellStyle: {
        lineHeight: '50px'
      },
    },
    {
      headerName: 'CCCD/CMND',
      field: 'idNo',
      colId: 'idNo',
      width: 120,
      cellStyle: {
        lineHeight: '50px'
      },
    },
    {
      field: 'action',
      headerName: "Thao tác",
      colId: 'action',
      width: 150,
      editable: false,
      cellStyle: (params: any) => {
        return {
          textAlign: 'right',
          lineHeight: '50px'
        };
      },
      cellRenderer: ({ data: record }: { data: RegistrationModel }) => {
        return (
          <></>
        )
      }
    },
  ]);
  const onGridReady = useCallback(async (params: GridReadyEvent) => {

    //chỗ này tiến hành lấy dự liệu về fill vào table
    const datasource = getServerSideDatasource(getData);
    params.api!.setGridOption('serverSideDatasource', datasource);

  }, []);

  const getServerSideDatasource: (server: (skip: number, limit: number) => Promise<any>) => IServerSideDatasource = (
    server: any
  ) => {
    return {
      getRows: async (params: any) => {
        // console.log('[Datasource] - rows requested by grid: ', params.request);
        const skip = params.request.startRow ?? 0;
        const take = (params.request.endRow ?? 0) - (params.request.startRow ?? 0);
        const response = await server(skip, take);
        // adding delay to simulate real server call
        setTimeout(function () {
          // if (response.success) {
          // eslint-disable-next-line no-constant-condition
          if (response && response.code === 200) {
            console.log(response)
            // call the success callback
            params.success({
              rowData: response.data,
              // rowCount: response.totalCount,
              // rowData: [],
              rowCount: response.totalCount
            });
          } else {
            // inform the grid request failed
            params.fail();
          }
        }, 0);
      },
    };
  };

  const [systemSettings, setSytemSettings] = useAtom(systemSettingAtom);
  console.log(systemSettings)
  /**
   * get data from api
   * @param skip 
   * @param limit 
   * @returns 
   */
  const getData = async (skip: number, limit: number) => {

    let pageCal = (skip / limit) + 1
    // const params = {
    //     page: pageCal,
    //     size: limit,
    //     TextSearch: '',
    // };
    // const response = await fetch(`${url}/Customer?filter=${JSON.stringify(params)}`)
    // fieldsValue.size = limit;
    // fieldsValue.page = pageCal;
    // const filterModel = {
    //     ...fieldsValue,
    //     customerId: params.id
    // }




    let objFilter: any = {
      page: pageCal,
      size: limit,
      textSearch: '',
      year: systemSettings?.currentExamYear
    }

    //nếu tài khoản là đại lý
    if (user?.picType === PICType._3) {
      objFilter["provinceId"] = user?.objectId ?? undefined
    }

    //nếu tài khoản là trường
    if (user?.picType === PICType._2) {
      objFilter["schoolId"] = user?.objectId ?? undefined
    }

    const response: ResponseData = await getRegistration(JSON.stringify(objFilter)) as ResponseData<RegistrationModel[]>
    return response;
  }
  const changePagination = (event: any) => {
    // console.log(event)
    if (event.newPage) {
      const currentPage = gridRef.current?.api.paginationGetCurrentPage();
      // console.log(currentPage)
      //if (this.data.rowData.length <= (currentPage * 10)) {

      //}
    }

    //khi chọn page size mới
    if (event.newPageSize) {
      const currentPageSize = gridRef.current?.api.paginationGetPageSize();

      gridRef.current?.api.setGridOption('paginationPageSize', currentPageSize);
      gridRef.current?.api.setGridOption('cacheBlockSize', currentPageSize);
    }
  }

  return (
    <div>
      <div className="tableViewContainer" ref={gridContainerRef}>
        <div style={containerStyle}>
          <div style={gridStyle} className="ag-theme-balham">
            <AgGridReact<RegistrationModel>
              ref={gridRef}
              rowHeight={50}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowModelType={'serverSide'}
              pagination={true}
              headerHeight={40}
              // statusBar={statusBar}
              // suppressPaginationPanel={true}
              paginationPageSize={defaultPageSize}
              rowSelection={'multiple'}
              getRowId={getRowId}
              cacheBlockSize={defaultPageSize}
              animateRows={true}
              suppressRowClickSelection={true}
              suppressContextMenu={true}
              onGridReady={onGridReady}
              // editType={'fullRow'}
              // onCellEditingStopped={editCell}
              onPaginationChanged={changePagination}
            ></AgGridReact>
          </div>
        </div>
      </div>
    </div>
  )
}
