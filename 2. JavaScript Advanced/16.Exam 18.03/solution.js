class PaymentManager {
    constructor(title) {
        this.title=title;
    }
    render(target) {
        let id="#"+target;
        let container=$("<table>");
        let label=$(`<caption>${this.title} Payment Manager</caption>`);
        let thead=$("<thead>\n" +
            "        <tr>\n" +
            "            <th class=name>Name</th>\n" +
            "            <th class=category>Category</th>\n" +
            "            <th class=price>Price</th>\n" +
            "            <th>Actions</th>\n" +
            "        </tr>\n" +
            "   </thead>\n");
        let tbody=$("<tbody class=payments>");
        let tfoot=$("<tfoot class=input-data>");
        let tFootTr=$("<tr>\n" +
            "            <td><input name=name type=text></td>\n" +
            "            <td><input name=category type=text></td>\n" +
            "            <td><input name=price type=number></td>");
        let addBtn=$("<td><button>Add</button></td>").click(function() {
            let tBodyTR=$("<tr>");
            //let name=$("input[name=name]", this).val();
            //let name = $(this).find('input[name=name]').val();
            let name=$(this).parent().find("input[name=name]");
            let category=$(this).parent().find("input[name=category]");
            let price=$(this).parent().find("input[name=price]");
            if(name.val()!=="" && category.val()!=="" && price.val()!=="") {
            tBodyTR.append($(`<td>${name.val()}</td>`));
            tBodyTR.append($(`<td>${category.val()}</td>`));
            tBodyTR.append($(`<td>${Number(price.val())}</td>`));
            let deleteBtn=$("<td><button>Delete</button></td>").click(function() {
                $(this).parent().remove();
            });
            tBodyTR.append(deleteBtn);
            tBodyTR.append($("</tr>"));
            tbody.append(tBodyTR);
            //$(this).append(tbody);
            name.val("");
            category.val("");
            price.val("");
        }});
        tFootTr.append(addBtn);
        tfoot.append(tFootTr);


        container.append(label);
        container.append(thead);
        container.append(tbody);
        container.append(tfoot);
        $(`${id}`).append(container);
    }
}